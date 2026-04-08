Assert that a declared component element is checked.

`Assertions.toBeChecked(component, elementKey)` first ensures visibility, then checks Playwright `toBeChecked()`.

```ts
{@include assertions/toBeChecked/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toBeChecked
@see [`Assertions.toBeDisabled`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeDisabled) For other element states.
@namespace Assertions
