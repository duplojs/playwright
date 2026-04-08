Wrap `Assertions` helpers under a custom Playwright step.

`Assertions.withStep(stepName)` returns the same assertion helpers while grouping each call under an outer `test.step(stepName, ...)`.

```ts
{@include assertions/withStep/example.ts[5,20]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#withStep
@see [`createStepWrapper`](https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper) Used internally to build the wrapper.
@namespace Assertions
