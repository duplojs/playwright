Group reusable user interactions built on top of component elements.

`Actions` exposes ready-to-use interaction helpers such as click, fill, type, check, or drag-and-drop. They are meant to be called with a component instance and one of its declared element keys.

Use this namespace when you want explicit, reusable user actions instead of calling Playwright locators directly in every test.

```ts
{@include actions/example.ts[5,23]}
```

@remarks

Most actions first rely on `Assertions.toBeVisible(...)` before performing the underlying Playwright operation.

@see https://playwright.duplojs.dev/en/v0/api/actions
@see [`Assertions`](https://playwright.duplojs.dev/en/v0/api/assertions) For the matching expectation helpers often used before or after actions.
@namespace Actions
