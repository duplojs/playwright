Assert that a declared component element has the expected text.

`Assertions.toHaveText(component, elementKey, text)` first ensures visibility, then checks Playwright `toHaveText(text)`.

```ts
{@include assertions/toHaveText/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText
@see [`Assertions.toContainText`](https://playwright.duplojs.dev/en/v0/api/assertions#toContainText) For partial text matching.
@namespace Assertions
