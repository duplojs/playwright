Assert that a declared component element contains the expected text.

`Assertions.toContainText(component, elementKey, text)` first ensures visibility, then checks Playwright `toContainText(text)`.

```ts
{@include assertions/toContainText/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toContainText
@see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For exact text matching.
@namespace Assertions
