Select one or more options on a declared component element.

`Actions.selectOption(component, elementKey, values)` checks visibility, then calls Playwright `selectOption(values)` on the target element.

```ts
{@include actions/selectOption/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#selectOption
@see [`Actions.fill`](https://playwright.duplojs.dev/en/v0/api/actions#fill) For text inputs instead of select fields.
@namespace Actions
