Assert that a declared component element is visible.

`Assertions.toBeVisible(component, elementKey)` scrolls the target into view if needed, then checks Playwright `toBeVisible()`.

```ts
{@include assertions/toBeVisible/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible
@see [`Actions.click`](https://playwright.duplojs.dev/en/v0/api/actions#click) Uses this assertion internally before clicking.
@namespace Assertions
