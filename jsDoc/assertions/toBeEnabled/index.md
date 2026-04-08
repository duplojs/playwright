Assert that a declared component element is enabled.

`Assertions.toBeEnabled(component, elementKey)` first ensures visibility, then checks Playwright `toBeEnabled()`.

```ts
{@include assertions/toBeEnabled/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toBeEnabled
@see [`Assertions.toBeDisabled`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeDisabled) For the opposite state.
@namespace Assertions
