Group reusable expectations built on top of component elements.

`Assertions` exposes ready-to-use assertion helpers such as visibility, text, state, attributes, values, or quantity checks. They are meant to be called with a component instance and one of its declared element keys.

Use this namespace when you want readable, reusable assertions instead of repeating Playwright expectations directly in every test.

```ts
{@include assertions/example.ts[5,23]}
```

@remarks

Many assertions first ensure the target element is visible, then run the underlying Playwright expectation.

@see https://playwright.duplojs.dev/en/v0/api/assertions
@see [`Actions`](https://playwright.duplojs.dev/en/v0/api/actions) For the matching interaction helpers commonly used before assertions.
@namespace Assertions
