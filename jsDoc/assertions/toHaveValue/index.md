Assert that a declared component element has the expected value.

`Assertions.toHaveValue(component, elementKey, value)` first ensures visibility, then checks Playwright `toHaveValue(value)`.

```ts
{@include assertions/toHaveValue/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveValue
@see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For text content instead of form values.
@namespace Assertions
