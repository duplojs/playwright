Click a declared component element.

`Actions.click(component, elementKey)` checks that the target element is visible, then calls Playwright `click()` on it.

```ts
{@include actions/click/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#click
@see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used internally before clicking.
@namespace Actions
