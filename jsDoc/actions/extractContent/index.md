Extract the text content of a declared component element.

`Actions.extractContent(component, elementKey)` checks visibility, then returns Playwright `textContent()` for the target element.

```ts
{@include actions/extractContent/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#extractContent
@see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For asserting text instead of reading it.
@namespace Actions
