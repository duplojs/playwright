Assert that a declared component element is disabled.

`Assertions.toBeDisabled(component, elementKey)` first ensures visibility, then checks Playwright `toBeDisabled()`.

```ts
{@include assertions/toBeDisabled/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toBeDisabled
@see [`Assertions.toBeEnabled`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeEnabled) For the opposite state.
@namespace Assertions
