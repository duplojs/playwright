Type text sequentially into a declared component element.

`Actions.type(component, elementKey, text, options?)` checks visibility, then calls Playwright `pressSequentially(...)` on the target element.

```ts
{@include actions/type/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#type
@see [`Actions.fill`](https://playwright.duplojs.dev/en/v0/api/actions#fill) For direct value replacement instead of sequential typing.
@namespace Actions
