# Snippet Check

Compiles the code snippets in the documentation articles against pinned DevExtreme packages, so broken examples are found before readers find them.

It reads the `jQuery`, `Angular`, `Vue`, and `React` sections of an article, writes each snippet into a scratch project, and runs the real compiler for that framework:

| Framework | Compiler | What is checked |
|---|---|---|
| React | `tsc` | TypeScript and JSX type errors. JavaScript tabs: syntax only. |
| Vue | `vue-tsc` | SFC template and script types. JavaScript `<script>` blocks: syntax only. |
| Angular | `ngc` (strict templates) | TypeScript and template binding errors, such as unknown properties. |
| jQuery | `tsc` with `@types/jquery` and DevExtreme's jQuery typings | TypeScript tabs fully. JavaScript tabs: syntax only. |

ASP.NET MVC and Core snippets are not checked.

## Setup

Requires Node.js 24 and pnpm. From the docs root:

```console
npm run snippet-check:setup
```

This installs the playground dependencies from `tools/snippet-check/playground/pnpm-lock.yaml`. Nothing in the playground is installed by the main `pnpm install`.

## Usage

```console
# One article, a folder, or several paths
npm run check-snippets -- "concepts/05 UI Components/DataGrid/35 Paging/20 API.md"
npm run check-snippets -- "concepts/05 UI Components/TreeList"

# Everything you changed (against origin/main, plus working tree and untracked files)
npm run check-snippets -- --changed
npm run check-snippets -- --changed --base origin/26_2

# Narrow the run
npm run check-snippets -- --changed --framework react
npm run check-snippets -- <path> --widget DataGrid --quiet
```

| Option | Description |
|---|---|
| `--changed` | Adds the articles that differ from the base, plus uncommitted and untracked ones. |
| `--base ref` | Git base for `--changed` (default `origin/main`). |
| `--framework a,b` | Limits the run to `react`, `jquery`, `vue`, `angular`. |
| `--widget Name` | Fills `{WidgetName}` placeholders when the widget cannot be read from the article path. |
| `--check-js` | Type-checks JavaScript tabs instead of only their syntax. Expect many false positives, because most JavaScript snippets are fragments. |
| `--json` | Prints machine-readable results. |
| `--quiet` | Prints only failures and the summary. |

The exit code is `1` if any snippet fails, `2` for a usage or setup problem, and `0` otherwise. A whole documentation tree (about 8,700 snippets) takes under a minute.

Output looks like this:

```
FAIL  vue     concepts/.../35 Hide a Column Using the API.md:59
        error TS1005 concepts/.../35 Hide a Column Using the API.md:82 (App.vue): '=>' expected.
PASS  react   concepts/.../35 Hide a Column Using the API.md:98
SKIP  angular concepts/.../Foo.md:12  - no angular code tab (app.component.html)
```

Locations point at the markdown file and line, not at the generated scratch files.

## How a snippet is prepared

Snippets in the articles are intentionally incomplete, so they are normalized before they are compiled. The rules live in [src/resolve.ts](src/resolve.ts); line counts never change, which keeps error locations accurate.

- `{WidgetName}`, `{widgetName}`, `{widget-name}`, and `{widgetname}` are replaced with the widget from the article path (`dxDataGrid` becomes `DataGrid`). `GridBase` articles are checked once for `DataGrid` and once for `TreeList`.
- The `...` elision is replaced with valid code: removed from tags (`<DataGrid ... >`) and imports (`{ ..., ViewChild }`), and replaced with `undefined` in value positions (`data: ...`).
- `{/* note */}` after a JSX attribute becomes `/* note */`, which is valid JSX.
- An Angular `@NgModule({ ... })` shown without its class gets an empty class.
- Alternative tabs for the same file, such as `App.vue (Options API)` and `App.vue (Composition API)`, are checked as separate snippets.
- Names that many snippets use without declaring, such as `employees`, are declared in [playground/globals.d.ts](playground/globals.d.ts).
- Imports of sibling files that the article does not show (`./data`) are ignored. The ignore list is in [config.json](config.json).

Unused imports are reported as warnings. They never fail a snippet. Other unused code is not reported, because snippets elide the code that would use it.

## What a result means

- **PASS** means the snippet compiles after normalization. It does not mean the snippet does what the article says.
- **FAIL** means the compiler found a real error in the snippet as written, such as invalid JSX, a typo, a wrong property name, or a type mismatch. Fix the snippet. Do not hide the error in `config.json` unless the pattern is a deliberate documentation convention, and then add a reason.
- **SKIP** always has a reason: no code tab for that framework (for example, an HTML-only Angular tab), or `{WidgetName}` placeholders with an unknown widget.

The playground pins the latest published DevExtreme version. An article that documents an API introduced after that version fails with "has no exported member" until the matching packages are published and the pin is updated. Check the version in `playground/package.json` before treating such a failure as a snippet bug.

If a compiler crashes, or reports an error in a file that is not a snippet, the tool stops with that output instead of reporting a pass.

## Maintaining the tool

- **DevExtreme version.** Edit the pinned versions in [playground/package.json](playground/package.json), run `pnpm --dir tools/snippet-check/playground --ignore-workspace install`, and commit the lock file. Angular requires a matching TypeScript version; the Angular compiler refuses to start otherwise, and the tool reports that.
- **A new framework or checker.** Add an adapter in [src/adapters/](src/adapters/) that implements `skipReason` and `check`, and register it in `src/adapters/index.ts`.
- **Tests.** `npm run test-snippet-check` runs the unit tests and compiles two fixture articles (one valid, one broken) with the real compilers. Run it after changing the resolver or an adapter.
- **Scratch files.** Generated projects are written to `playground/.work/` and are ignored by Git.
