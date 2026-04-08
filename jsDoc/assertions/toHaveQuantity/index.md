Assert the number of matched elements for a declared component entry.

`Assertions.toHaveQuantity(component, elementKey, { quantity, operator? })` polls `element.count()` and compares it with the expected value.

```ts
{@include assertions/toHaveQuantity/example.ts[5,21]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveQuantity
@see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) For single-element visibility checks.
@namespace Assertions
