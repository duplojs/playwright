Create a typed page factory built on top of the component model.

`createPage(name, params)` defines a page like a component, then adds a typed `makePath` function used by the website layer for navigation.

Use it when a screen needs both component-like accessors and a stable path-building contract.

- `name` is the page name in the test model.
- `params.makePath` builds the route or URL path for the page.
- `params.getMainElement`, `params.getElements`, `params.getMethods`, and `params.components` follow the same role as in `createComponent`.

The returned value is a page factory. Called with a `Website`, it produces a typed page instance exposing component features plus `makePath(...)`.

```ts
{@include createPage/example.ts[14,33]}
```

@remarks

`createPage` reuses `createComponent` internally, so page instances follow the same element, method, and nested-component model as regular components.

@see https://playwright.duplojs.dev/en/v0/api/page
@see [`createComponent`](https://playwright.duplojs.dev/en/v0/api/component) For the shared component model used by pages.
@see [`createWebsite`](https://playwright.duplojs.dev/en/v0/api/website) For navigation and page instantiation from a Playwright context.
