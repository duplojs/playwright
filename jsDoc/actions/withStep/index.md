Wrap `Actions` helpers under a custom Playwright step.

`Actions.withStep(stepName)` returns the same action helpers while grouping each call under an outer `test.step(stepName, ...)`.

```ts
{@include actions/withStep/example.ts[5,20]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#withStep
@see [`createStepWrapper`](https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper) Used internally to build the wrapper.
@namespace Actions
