Create a typed component factory for reusable Playwright page fragments.

`createComponent` is used to describe a reusable component once, then instantiate it from a website context where needed. It defines how the component is found, which locators it exposes, which helper methods it provides, and which child components it can reach.

The function is used with the signature `createComponent(name, params)`.

- `name` is the public name of the component in the test model.
- `params.getMainElement` is required and returns the root locator of the component.
- `params.getElements` is optional and can expose named child locators.
- `params.getMethods` is optional and can expose reusable helper methods built from the component context.
- `params.components` is optional and can register child component factories reachable through `iWantToSeeComponent`.

The returned value is a component factory. Called with a `Website`, it produces a typed component instance exposing its main element, declared elements, wrapped methods, and nested components.

```ts
{@include createComponent/example.ts[18,39]}
```

@remarks

`createComponent` does not interact with the browser by itself. It defines how to build a component instance from a `Website`, then wraps declared methods in Playwright steps when the component is instantiated.

@see https://playwright.duplojs.dev/en/v0/api/component
@see [`createPage`](https://playwright.duplojs.dev/en/v0/api/page) For page-level composition based on the same component model.
@see [`createWebsite`](https://playwright.duplojs.dev/en/v0/api/website) For the website context used to instantiate the factory.
