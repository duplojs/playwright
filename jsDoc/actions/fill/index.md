Fill a declared component element with text.

`Actions.fill(component, elementKey, content)` checks visibility, then calls Playwright `fill(content)` on the target element.

```ts
{@include actions/fill/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/actions#fill
@see [`Actions.type`](https://playwright.duplojs.dev/en/v0/api/actions#type) For sequential typing instead of direct fill.
@namespace Actions
