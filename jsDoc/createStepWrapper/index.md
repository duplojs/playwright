Create a step wrapper that groups existing component interactions under a custom Playwright step.

`createStepWrapper(interactions)` returns a function that accepts a step label, then exposes the same interaction methods while wrapping each call in `test.step(stepName, ...)`.

Use it when several low-level interactions should appear as one higher-level action in the Playwright report.

- `interactions` is an object whose values are functions previously created with `createComponentInteraction`.
- the returned function is used with the signature `wrapper(stepName).method(...args)`.

```ts
{@include createStepWrapper/example.ts[5,28]}
```

@remarks

`createStepWrapper` does not change the interaction behavior itself. It only adds an outer Playwright step around the selected interaction call.

@see https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper
@see [`createComponentInteraction`](https://playwright.duplojs.dev/en/v0/api/componentInteraction) For the interaction functions wrapped by this helper.
