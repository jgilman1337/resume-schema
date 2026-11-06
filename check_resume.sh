#!/bin/sh

# Validate JSON instances against schema.json (a resume document) in this directory.
# Pass a file, or a directory of *.json files (non-recursive).

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ $# -lt 1 ]; then
	echo "Usage: $0 FILE_OR_DIR..." >&2
	echo "A directory contributes its *.json files, non-recursively." >&2
	exit 2
fi

exec "$SCRIPT_DIR/check.sh" "$SCRIPT_DIR/schema.json" "$@"
