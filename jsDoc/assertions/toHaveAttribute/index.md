Assert that a declared component element has an attribute.

`Assertions.toHaveAttribute(component, elementKey, name, value?)` first ensures visibility, then checks Playwright `toHaveAttribute(...)`.

```ts
{@include assertions/toHaveAttribute/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveAttribute
@see [`Assertions.toHaveClass`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveClass) For class-specific assertions.
@namespace Assertions
