DevExtreme ships one message dictionary per language. To create a dictionary for a new language or a regional variant (for example `fr-CA`, `en-GB`, or `de-CH`), follow these steps:

1. Copy a base dictionary file, for example `fr.json`.
2. Rename the file with a BCP 47 tag, for example `fr-CA.json`.
3. Change the top-level key in the dictionary from `"fr"` to `"fr-CA"`.
4. Translate or adjust messages for the target language/region.
5. Load messages and set the locale to the same tag.

Use standard BCP 47 casing in file names and keys:

- Language subtags: lowercase (`fr`, `en`, `zh`).
- Region subtags: uppercase (`CA`, `GB`, `TW`).
- Script subtags: title case (`Hant`).

[note] You can use modern LLM-based translation tools to generate a custom dictionary from an existing DevExtreme dictionary. This approach gives you a fast starting point for additional languages and dialects and can reduce localization effort. AI-generated translations can contain inaccuracies, inconsistencies, or context-related errors. Review and validate all generated strings before production use. You are responsible for final translation quality.
