Assert that a declared component element has the expected class value.

`Assertions.toHaveClass(component, elementKey, value)` first ensures visibility, then checks Playwright `toHaveClass(value)`.

```ts
{@include assertions/toHaveClass/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveClass
@see [`Assertions.toHaveAttribute`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveAttribute) For generic attribute assertions.
@namespace Assertions
