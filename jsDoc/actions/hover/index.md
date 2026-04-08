Hover a declared component element.

`Actions.hover(component, elementKey)` checks visibility, then calls Playwright `hover()` on the target element.

```ts
{@include actions/hover/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#hover
@see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used internally before hovering.
@namespace Actions
