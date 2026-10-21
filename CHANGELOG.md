<a id="2.2.0"></a>
## [WIP], Version 2.2.0

### Changes
* `work`, `volunteer`, `education`, and `projects` entries gained a `dates` array of `{startDate, endDate}` ranges, sorted from oldest to newest, so interrupted stints (two tours at one employer, a leave of absence, resumed project work) are representable. Blank `endDate` on the last range still marks ongoing.
* The flat `startDate` and `endDate` keys remain valid as the legacy single-range form for backwards compatibility. An entry carries either the `dates` array or the flat pair, never both.

---

<a id="2.1.0"></a>
## [2026-10-19, Version 2.1.0]

### Changes
* Stable `id` fields were added to every excludable list section — `work`, `volunteer`, `education`, `awards`, `certificates`, `publications`, `skills`, `languages`, `interests`, and `references` — spelling the questionnaire join key and the settings exclusion token.
* `work[].crossReferencedProjects` was added, listing `projects[].id` values for projects that belong to one job, such as consulting engagements under a single employer.
* `education[].level` was added as a closed enum (`k-12`, `trade`, `undergraduate`, `graduate`, `professional`, `other`) so filtering code can drop entries well below the highest level attained.

---

<a id="2.0.0"></a>
## [2026-02-12, Version 2.0.0]

### Changes
* The typedefs moved out of the resume and job schemas into an external `types.json`, referenced by `$id`, so both schemas share one source for keywords, location, mastery level, experience level, job type, and meta.
* `meta.version` became a required, semver-rigid property, and `meta.lastModified` gained an RFC3339 format check.
* The education section was overhauled: `programs` (name and type required), `honorSocieties` objects, `courses`, `awards`, `extracurriculars`, `notes`, and a structured GPA.
* The job schema tightened: `type` closed onto an enum, experience and remote labels became enums, and the top-level keywords array centralized onto the shared keywords definition.
* A keywords dictionary schema was added to alias keyword spellings onto one canonical token.

---

<a id="1.0.0"></a>
## [WIP], Version 1.0.0

### [Discussion: Planning 1.0](https://github.com/jsonresume/resume-schema/issues/372)

---

<a id="0.0.0"></a>
## [2014-07-30, Version 0.0.0]((https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json))

### Changes
* [[v0.1.3] - add `education.url`](https://github.com/jsonresume/resume-schema/releases/tag/v0.1.3)
* [[v0.1.2] - add `$schema` property](https://github.com/jsonresume/resume-schema/releases/tag/v0.1.2)
* [[v0.1.1] - better dates](https://github.com/jsonresume/resume-schema/releases/tag/v0.1.1) - [Discussion](https://github.com/jsonresume/resume-schema/issues/142)
* [[v0.0.17]](https://github.com/jsonresume/resume-schema/commit/a6d1ae5c990e3370de6ca305ef32477b9516391b)
  * [[675972] - add `location` to work entries](https://github.com/jsonresume/resume-schema/pull/291)
  * [[ded5de] - move to entity description](https://github.com/jsonresume/resume-schema/pull/271)
  * [[b885dd] - move from `company` to `name`](https://github.com/jsonresume/resume-schema/pull/270)
  * [[9c965e] - Use `image` instead of `picture`](https://github.com/jsonresume/resume-schema/pull/268)
  * [[fb876d] - rewrite `website` to `url`](https://github.com/jsonresume/resume-schema/pull/267) - [Discussion](https://github.com/jsonresume/resume-schema/issues/266)
  * [[d996db] - add `project` section to the schema](https://github.com/jsonresume/resume-schema/pull/254) - [Discussion](https://github.com/jsonresume/resume-schema/issues/201)
  * [[720393] - company description](https://github.com/jsonresume/resume-schema/pull/261)
  * [[a26a72] - Add `lastModified` to meta](https://github.com/jsonresume/resume-schema/pull/259)
  * [[ec76c1] - meta `version`](https://github.com/jsonresume/resume-schema/pull/258)
  * [[230260] - Use `canonical` instead of `url`](https://github.com/jsonresume/resume-schema/pull/257)
  * [[de6067] - `meta` was added](https://github.com/jsonresume/resume-schema/pull/237) - [Discussion](https://github.com/jsonresume/resume-schema/issues/204)
  * [[8d316c] - updated `language' properties](https://github.com/jsonresume/resume-schema/pull/149) - [Discussion](https://github.com/jsonresume/resume-schema/issues/145)
  * [[a1bc56] - changes `website` -> `url`](https://github.com/jsonresume/resume-schema/pull/155) - [Discussion](https://github.com/jsonresume/resume-schema/issues/148)
* [[v0.0.12]](https://github.com/jsonresume/resume-schema/commit/f18c18743ac1903761b80851393a3a756dc327e4)
  * [[f02300] - `languages` was added](https://github.com/jsonresume/resume-schema/commit/f02300e36ba076787d008928b29963c3ffce6121) - [Discussion](https://github.com/jsonresume/resume-schema/issues/34)
  * [[1c93f1] - `hobbies` was renamed to `interests`](https://github.com/jsonresume/resume-schema/commit/1c93f11f121df3794ad59a99cfbd42e7948201c4)
  * [[dee007] - `volunteer` was added](https://github.com/jsonresume/resume-schema/commit/dee007c2e373645b6b67d07a92aebf22fda5b95a) - [Discussion](https://github.com/jsonresume/resume-schema/issues/43)
  * [[b1b62f] - `summary` was added to `awards`](https://github.com/jsonresume/resume-schema/commit/b1b62fb425f4ad8b13ad4612d658bdd203f51206) - [Discussion](https://github.com/jsonresume/resume-schema/issues/119)
  * [[7bde1b] - `summary` was added to `publications`](https://github.com/jsonresume/resume-schema/pull/129) - [Discussion](https://github.com/jsonresume/resume-schema/issues/126)
  * [[818051] - `profiles` was changed to a type array instead of an object](https://github.com/jsonresume/resume-schema/pull/116) - [Discussion](https://github.com/jsonresume/resume-schema/issues/6)
  * [[1a97f0] - `bio` was renamed to `basics`](https://github.com/jsonresume/resume-schema/pull/117) - [Discussion](https://github.com/jsonresume/resume-schema/issues/68)
  * [[bb0171] - `address` and `postalCode` were added to `location`](https://github.com/jsonresume/resume-schema/pull/110) - [Discussion](https://github.com/jsonresume/resume-schema/issues/76)
  * [[a236a3] - `awardDate` was changed to `date`](https://github.com/jsonresume/resume-schema/pull/107) - [Discussion](https://github.com/jsonresume/resume-schema/pull/107)
  * [[7e53c3] - `websites` was changed to `website`, changed from object into string](https://github.com/jsonresume/resume-schema/pull/101) - [Discussion](https://github.com/jsonresume/resume-schema/issues/10)
  * [[277c0d] - specified that `countryCode` conforms to ISO standard](https://github.com/jsonresume/resume-schema/pull/78) - [Discussion](https://github.com/jsonresume/resume-schema/pull/78)
  * [[24b0bb] - `region` replaced `state` as the default](https://github.com/jsonresume/resume-schema/pull/99) - [Discussion](https://github.com/jsonresume/resume-schema/issues/19)
  * [[011b4a] - `picture` was added to the `bio` object](https://github.com/jsonresume/resume-schema/pull/80) - [Discussion](https://github.com/jsonresume/resume-schema/issues/29)
  * [[0d4ae8] - `gpa` was added to `education` objects](https://github.com/jsonresume/resume-schema/pull/97) - [Discussion](https://github.com/jsonresume/resume-schema/issues/7)
  * [[afc937] - `email` and `phone` were changed from objects into strings](https://github.com/jsonresume/resume-schema/pull/98) - [Discussion](https://github.com/jsonresume/resume-schema/issues/27)
  * [[717b2a] - `firstName` and `lastName` were merged into `name`](https://github.com/jsonresume/resume-schema/releases/tag/v0.0.12) - [Discussion](https://github.com/jsonresume/resume-schema/issues/4)
* [[v0.0.10] - Add `bio.label`](https://github.com/jsonresume/resume-schema/releases/v0.0.10)
* [[v0.0.7] - Remove `skills.releaseDate`](https://github.com/jsonresume/resume-schema/releases/tag/v0.0.7)
* [[v0.0.6] - Schema First Draft](https://github.com/jsonresume/resume-schema/releases/tag/v0.0.6)
