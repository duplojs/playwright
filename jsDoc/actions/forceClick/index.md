Force a click on a declared component element.

`Actions.forceClick(component, elementKey)` calls Playwright `click({ force: true })` on the target element.

```ts
{@include actions/forceClick/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#forceClick
@see [`Actions.click`](https://playwright.duplojs.dev/en/v0/api/actions#click) For the standard visible click flow.
@namespace Actions
