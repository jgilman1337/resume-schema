#!/bin/sh

# Validate JSON instances against a schema file in this directory.
# check_job.sh and check_resume.sh select the schema and call this script.
#
# Pass the schema, then a file or a directory of *.json files (non-recursive).
#
# Requires check-jsonschema on PATH. Install it with pipx:
#   pipx install check-jsonschema
# https://github.com/python-jsonschema/check-jsonschema

usage() {
	echo "Usage: $0 SCHEMA FILE_OR_DIR..." >&2
	echo "A directory contributes its *.json files, non-recursively." >&2
	exit 2
}

if [ $# -lt 2 ]; then
	usage
fi

SCHEMAFILE="$1"
shift

# The schema must be a local file; the wrappers pass an absolute path.
if [ ! -f "$SCHEMAFILE" ]; then
	echo "not a schema file: $SCHEMAFILE" >&2
	exit 2
fi

# Collect instance paths before invoking the validator.
instances="$(mktemp)"
trap 'rm -f "$instances"' EXIT INT TERM

for arg in "$@"; do
	# A directory expands to the json files sitting directly inside it.
	if [ -d "$arg" ]; then
		found=0
		for f in "$arg"/*.json; do
			# An unmatched glob stays literal; skip that and anything that is not a file.
			if [ ! -f "$f" ]; then
				continue
			fi
			printf '%s\n' "$f" >> "$instances"
			found=1
		done
		if [ "$found" -eq 0 ]; then
			echo "no .json files in $arg" >&2
			exit 2
		fi
	# A path that exists as a file is one instance.
	elif [ -f "$arg" ]; then
		printf '%s\n' "$arg" >> "$instances"
	else
		echo "not a file or directory: $arg" >&2
		exit 2
	fi
done

# Rebuild "$@" so names that contain spaces stay one argument.
set --
while IFS= read -r instance; do
	set -- "$@" "$instance"
done < "$instances"

# check-jsonschema fetches $id unless the base URI is the local schema directory.
PARENTDIR="$(cd "$(dirname "$SCHEMAFILE")" && pwd)"

check-jsonschema --base-uri="file://${PARENTDIR}/" --schemafile "$SCHEMAFILE" "$@"
