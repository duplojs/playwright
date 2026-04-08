Short summary sentence for the public API.

Describe what the symbol does in practical terms, what role it plays in the library, and what a consumer should expect from it. Prefer behavior-focused wording over implementation details.

If relevant, describe:

- the supported signatures or usage forms
- what the main parameters are for
- what the consumer gets back or what effect the call has

```ts
{@include path/to/example.ts[lineStart,lineEnd]}
```

Choose a focused line range. Do not include the whole file by default.

Hide everything that is only there to make the example type-check or run:

- imports when they are obvious from the doc context
- helper types or interfaces
- unrelated setup
- utility functions not directly relevant to the symbol being explained

Compact writing is allowed if it stays readable.

@remarks

Add remarks only when they help clarify a constraint, a side effect, or an important usage detail that would otherwise be easy to miss.

@see https://playwright.duplojs.dev/en/v0/api/path/to/symbol
@see [`RelatedSymbol`](https://playwright.duplojs.dev/en/v0/api/path/to/related-symbol) Optional short explanation.

@namespace GroupName

Add `@namespace` only when the symbol belongs to a grouped API. Do not add it for flat root exports.
