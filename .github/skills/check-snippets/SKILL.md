---
name: check-snippets
description: Compile-check the jQuery, Angular, Vue, and React code snippets in documentation articles (markdown files) against pinned DevExtreme packages. Use when the user asks to check, validate, or verify code snippets or samples in docs, after migrating or writing snippets, or before opening a docs PR that changes code samples.
---

# Check documentation snippets

The checker lives in `tools/snippet-check` (see its `README.md`). It writes each snippet into a scratch project and runs `tsc`, `vue-tsc`, or `ngc` on it.

## Steps

1. Work from the docs root (the folder with `package.json` and `concepts/`).
2. If `tools/snippet-check/playground/node_modules` is missing, run `npm run snippet-check:setup`.
3. Pick the scope from the request:
   - The user names files or folders: `npm run check-snippets -- "<path>" ...`
   - The user means "my changes" or a PR: `npm run check-snippets -- --changed`
   - Only one framework matters (for example, a React migration): add `--framework react`.
   - Placeholder-heavy `api-reference` articles outside grids: add `--widget <Name>`.
4. Read the output. Locations are markdown `file:line`, so open that line to see the snippet.
5. For each FAIL, decide whether it is a real snippet error (fix the markdown) or a gap in the tool (see below). Do not weaken `config.json` or `playground/globals.d.ts` just to turn a failure green.
6. After fixing, rerun the same command and confirm the failures are gone.

## Reporting

State the counts (passed, failed, skipped) and list each remaining failure with its `file:line` and the compiler message. Mention SKIP reasons when they hide a snippet the user cares about, for example an Angular article that only has an HTML tab.

Be precise about what a pass means: the snippet compiles after normalization. It was not run, and it was not compared with the article text.

## When the tool is wrong

A failure is a tool gap, not a snippet error, when the article uses a documentation convention that is valid for readers but cannot compile. Examples: a new kind of `...` elision, or a shared sample name such as `employees` that many snippets use undeclared.

- Fix elision handling in `tools/snippet-check/src/resolve.ts` and add a case to `test/snippet-check.test.ts`.
- Add a shared name to `tools/snippet-check/playground/globals.d.ts`.
- Add an ignore rule with a `reason` to `tools/snippet-check/config.json` only for a recurring, deliberate pattern.

Run `npm run test-snippet-check` after changing the tool.

## Not covered

ASP.NET MVC and Core snippets, JavaScript type checking (JavaScript tabs get a syntax check only, unless `--check-js` is passed), and runtime behavior.
