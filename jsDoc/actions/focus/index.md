Focus a declared component element.

`Actions.focus(component, elementKey)` checks visibility, then calls Playwright `focus()` on the target element.

```ts
{@include actions/focus/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#focus
@see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used internally before focusing.
@namespace Actions
