Check a declared component element.

`Actions.check(component, elementKey)` checks visibility, then calls Playwright `check()` on the target element.

```ts
{@include actions/check/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#check
@see [`Actions.uncheck`](https://playwright.duplojs.dev/en/v0/api/actions#uncheck) For the opposite state change.
@namespace Actions
