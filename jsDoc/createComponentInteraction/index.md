Create a reusable component interaction wrapped in a Playwright step.

`createComponentInteraction(stepName, step)` builds a function meant to run against one declared component element. It resolves the target element from `component.elements`, injects a small execution context into `step`, and wraps the whole call in `test.step`.

Use it when you want to define an interaction once, then reuse it across components of the same shape.

- `stepName` is the displayed Playwright step label. `$component` and `$element` are replaced at call time.
- `step` receives `{ component, elementKey, element }` as its first argument, then the custom arguments passed by the caller.

The returned function is used with the signature `interaction(component, elementKey, ...args)`.

```ts
{@include createComponentInteraction/example.ts[5,28]}
```

@remarks

If the requested element is missing from `component.elements`, the returned function throws `MissingComponentElementError` before calling the embedded step.

@see https://playwright.duplojs.dev/en/v0/api/componentInteraction
@see [`createStepWrapper`](https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper) To wrap several interactions under a larger custom step.
@see [`createComponent`](https://playwright.duplojs.dev/en/v0/api/component) To define the component shape consumed by the interaction.
