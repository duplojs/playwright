Create the website context used to navigate pages, inspect components, and access shared browser helpers.

`createWebsite(params)` binds a Playwright `Page`, a `BrowserContext`, environment configuration, and optional hooks into one reusable test object.

Create it inside `test.extend(...)`, then consume it as an injected fixture in test callbacks.

- `params.playwrightPage` is the active Playwright page used for navigation and expectations.
- `params.playwrightBrowserContext` is the browser context used for helpers such as cookie injection.
- `params.envConfig.baseUrl` is optional and prefixes generated page paths with a full base URL.
- `params.envConfig.prefix` is optional and prepends a route prefix before navigation.
- `params.hooks` is optional and can run logic before or after page navigation.

The returned website object exposes navigation helpers, page/component assertions, browser helpers, and prefix-aware URL building.

```ts
{@include createWebsite/example.ts[1,36]}
```

@remarks

When `baseUrl` is defined, the website resolves page paths through `new URL(...)`. Without it, navigation uses the prefixed path directly.

@see https://playwright.duplojs.dev/en/v0/api/website
@see [`createPage`](https://playwright.duplojs.dev/en/v0/api/page) For the page factories consumed by website navigation methods.
@see [`createComponent`](https://playwright.duplojs.dev/en/v0/api/component) For component factories consumed by website visibility helpers.
