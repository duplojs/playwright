Drag a declared component element to a target locator.

`Actions.dragTo(component, elementKey, target, options?)` checks visibility on both ends, then calls Playwright `dragTo(...)`.

```ts
{@include actions/dragTo/example.ts[5,19]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#dragTo
@see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used on the source element before dragging.
@namespace Actions
