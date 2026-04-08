Press a keyboard key on a declared component element.

`Actions.press(component, elementKey, key)` checks visibility, then calls Playwright `press(key)` on the target element.

```ts
{@include actions/press/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#press
@see [`Actions.focus`](https://playwright.duplojs.dev/en/v0/api/actions#focus) Useful before sending keyboard input in some flows.
@namespace Actions
