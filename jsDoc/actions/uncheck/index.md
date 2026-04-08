Uncheck a declared component element.

`Actions.uncheck(component, elementKey)` checks visibility, then calls Playwright `uncheck()` on the target element.

```ts
{@include actions/uncheck/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#uncheck
@see [`Actions.check`](https://playwright.duplojs.dev/en/v0/api/actions#check) For the opposite state change.
@namespace Actions
