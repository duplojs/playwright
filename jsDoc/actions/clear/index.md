Clear the value of a declared component element.

`Actions.clear(component, elementKey)` checks visibility, then calls Playwright `clear()` on the target element.

```ts
{@include actions/clear/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#clear
@see [`Actions.fill`](https://playwright.duplojs.dev/en/v0/api/actions#fill) Often used after clearing an input.
@namespace Actions
