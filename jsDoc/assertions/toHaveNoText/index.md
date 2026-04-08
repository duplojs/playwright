Assert that a declared component element has no text.

`Assertions.toHaveNoText(component, elementKey)` first ensures visibility, then checks Playwright `toHaveText("")`.

```ts
{@include assertions/toHaveNoText/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveNoText
@see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For explicit text assertions.
@namespace Assertions
