---
name: write-js-doc
description: Write or update JSDoc markdown/includes for @duplojs/playwright in jsDoc/, by first detecting the current public export structure, then choosing the right documentation path layout, examples, and source-code {@include ...} annotations.
---

# JSDoc for project

Use this skill when the task is to create or update JSDoc content for the public API of `@duplojs/playwright`.

## First rule

Do not assume the export structure in advance.

Before writing any documentation, inspect the current public API and determine whether the target symbol is:

- a flat root export
- a member of a grouped export or namespace-like object
- an internal symbol that should not be documented yet

If the structure is ambiguous, stop and ask for clarification before creating files.

## Where to look first

Read only the files you need:

- `AGENTS.md` for the project overview
- `scripts/index.ts` for the current public exports
- `scripts/*.ts` for the source implementation to document
- existing files under `jsDoc/` if they exist
- integration or test files when they provide the clearest consumer-facing usage example

## Bundled patterns

This skill ships with lightweight templates you can reuse to keep docs uniform:

- `assets/index-template.md` for `index.md`
- `assets/example-template.md` for `example.ts`

Use them as starting points, then adapt them to the actual symbol being documented.

## JSDoc language

All JSDoc markdown content must be written in English.

## Concision warning

Be synthetic.

If the documentation is overloaded, readers stop reading or miss the important point. Some APIs are complex and need more explanation, but always try to keep the text as compact as possible without losing the core meaning.

The priority is:

- help the reader understand what the symbol is for
- help the reader understand how to use it
- avoid adding secondary details unless they are truly useful

Compact notation is acceptable when it stays clear. Parentheses, brackets, arrows, or condensed phrasing are fine if they reduce noise without hurting readability.

## Choose the documentation path from the actual export shape

Use the current export model of the library, not a hardcoded assumption.

### Case 1: flat root export

If the symbol is exported directly from the package root, use:

- `jsDoc/{exportName}/index.md`
- `jsDoc/{exportName}/example.ts`

Example:

- `jsDoc/createWebsite/index.md`
- `jsDoc/createWebsite/example.ts`

### Case 2: member of a grouped export

If the symbol is exposed under a grouped API, use the group name as the first path segment:

- `jsDoc/{groupName}/{memberName}/index.md`
- `jsDoc/{groupName}/{memberName}/example.ts`

Examples:

- `jsDoc/actions/click/index.md`
- `jsDoc/assertions/toHaveText/index.md`
- `jsDoc/{futureGroup}/{futureMember}/index.md`

Normalize only when the repository already uses a convention. Do not invent a new naming scheme unless the task explicitly asks for one.

## Required structure of `index.md`

Keep the document compact and predictable.

Use this order:

1. Short description
2. Description of what the symbol is for
3. Description of supported signatures when relevant
4. Description of parameters and expected usage when relevant
5. Usage example wrapped in a `ts` code fence with `{@include ...[lineStart,lineEnd]}`
6. `@remarks` when needed
7. `@see` with useful links
8. `@namespace {GroupName}` only when the symbol really belongs to a grouped API

Do not add redundant section titles like `## Example` when the code block is already self-explanatory.

Only describe grouping information when it is actually part of the public API:

- for root exports: do not force a namespace section
- for grouped exports: add `@namespace {GroupName}` and mention the real owning group
- if the ownership is unclear: ask before writing

Do not force a fake namespace section for flat exports.

If you need a base structure, start from `assets/index-template.md`.

## Rules for `example.ts`

- Keep examples short and didactic.
- Prefer 2 to 3 examples.
- Show realistic usage with imports from the published package shape.
- Import according to the actual public API shape of the project.
- It is acceptable for the file to contain setup code, helpers, imports, interfaces, or type-only scaffolding that will not be shown in the final include.
- If the correct import style is unclear, inspect existing docs or ask before generating the example.
- Add short comments inside the example when they help explain the point of the shown usage.
- If showing the result of a call helps understanding, add a short comment for that too.

If you need a base example layout, start from `assets/example-template.md`.

## Include syntax

Use `{@include ...[lineStart,lineEnd]}` from the matching `example.ts`.

Wrap code examples in fenced blocks:

```md
```ts
{@include path/to/example.ts[5,18]}
```
```

The line range is important. Do not include the whole file by default.

Use line ranges to show only the relevant part of the example:

- skip imports when they add no value for the reader
- skip helper code that exists only for typing or setup
- skip unrelated interfaces, utility functions, or test scaffolding
- focus the include on the symbol and the usage you want the reader to understand

Examples:

```md
```ts
{@include createWebsite/example.ts[5,18]}
```
```

```md
```ts
{@include {groupName}/{memberName}/example.ts[8,16]}
```
```

## Source-code include annotations

When you add JSDoc for a public symbol, also add the matching include comment in the source file when it is missing.

### Root export example

```ts
/**
 * {@include createWebsite/index.md}
 */
export function createWebsite(...) {
```

### Grouped export example

For grouped members, attach the include to the exported symbol inside the owning group.

```ts
export namespace SomeGroup {
	/**
	 * {@include someGroup/someMember/index.md}
	 */
	export const someMember = ...
}
```

## Writing guidance

- Document the behavior that consumers rely on, not internal implementation details.
- Match the actual exported API names exactly.
- Keep examples aligned with the integration style used in `integration/index.test.ts`.
- Be as concise as possible. If two sentences explain the same thing, keep the clearer one.
- If a function is generic or typed, explain the practical usage rather than rewriting the TypeScript signature in prose.
- After the short description, explain how the function is meant to be used, what inputs it expects, and what it returns or produces for the consumer.
- If the API has multiple signatures or overload-like usage patterns, describe them explicitly.
- If the API delegates to Playwright expectations or locators, say so briefly and accurately.
- If the repository structure does not provide enough information to place the doc correctly, ask for precision before creating files.
- For `@see`, prefer doc links in the project doc style even if the final site is not fully written yet.

## `@see` guidance

Prefer direct links that follow the expected documentation URL shape.

Examples:

```md
@see https://playwright.duplojs.dev/en/v0/api/createComponent
@see [`createPage`](https://playwright.duplojs.dev/en/v0/api/createPage) for page-level composition.
```

For grouped APIs:

```md
@see https://playwright.duplojs.dev/en/v0/api/actions/click
@see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions/toHaveText)
```

## Validation checklist

Before finishing:

- confirm the target symbol is publicly exported
- confirm the JSDoc path matches the export shape
- confirm the include paths are correct
- confirm the selected line range shows only the relevant part of the example
- confirm the examples compile conceptually against the current API
- confirm no fake namespace structure was introduced
