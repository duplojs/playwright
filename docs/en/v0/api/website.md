---
outline: [2, 3]
prev:
  text: "API Reference"
  link: "/en/v0/api/"
next:
  text: "Component"
  link: "/en/v0/api/component"
description: "Create the central Website context to navigate, check pages, and use shared helpers from @duplojs/playwright."
---

# Website

`createWebsite` creates the central object used during an integration test.  
It connects a Playwright `Page`, a `BrowserContext`, the environment configuration, and several navigation or assertion helpers in a single interface.

In practice, it is designed to be prepared in an extended Playwright client, then injected into the tests.

## Simple example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/website/client.ts-->
```
::: tip What is happening here
- the `Website` is prepared once in a custom Playwright fixture
- each test gets `website` directly from the client
- `createPage(...)` describes a navigable page with its path and main element
- `website.iNavigateTo(...)` builds the final URL, opens the page, checks the URL, then checks that the page is visible
- `website.iExpectTitleIs(...)` and `website.iWantToBeOnPage(...)` show the role of `Website`: centralize the most frequent actions and checks
:::

The `Website` is prepared once, then reused in the tests through the extended Playwright client.

## Parameters

- `params.playwrightPage` - the Playwright `Page` carried by the `Website`.
- `params.playwrightBrowserContext` - the Playwright `BrowserContext`, notably for helpers like `addCookies(...)`.
- `params.envConfig` - the configuration used to build URLs.
- `params.envConfig.baseUrl?` - the base URL.
- `params.envConfig.prefix?` - a prefix added before the page path.
- `params.hooks?` - hooks executed around navigation.
- `params.hooks.beforeNavigateOnPage?()` - called before navigation.
- `params.hooks.afterNavigateOnPage?()` - called after navigation.

## Syntax

```ts
interface CreateWebsiteParams {
	playwrightPage: PlaywrightPage;
	playwrightBrowserContext: BrowserContext;
	envConfig: {
		baseUrl?: string;
		prefix?: string;
	};
	hooks?: {
		beforeNavigateOnPage?(): void | Promise<void>;
		afterNavigateOnPage?(): void | Promise<void>;
	};
}

interface Website {
	playwrightPage: PlaywrightPage;
	iNavigateTo(page, ...args): Promise<Page>;
	iGoTo(page, ...args): Promise<Page>;
	iWantToBeOnPage(page): Promise<Page>;
	iWantToSee(component): Promise<Component>;
	iWantToExist(component): Promise<Component>;
	iExpectTitleIs(title: string | RegExp): Promise<void>;
	iExpectUrlIs(url: string | RegExp): Promise<void>;
	addCookies(...args): Promise<void>;
	refresh(): Promise<void>;
	setPrefix(prefix?: string): void;
	waitForHydration(): Promise<void>;
}
```

## What is it for?

`Website` is used to avoid repeating everywhere:

- URL construction
- direct calls to `page.goto(...)`
- recurring assertions on URL, title, or page presence
- cross-cutting helpers like refresh, hydration, or cookies

In other words, it plays the role of a high-level facade to drive a website in a test.

## See also

- [`Component`](/en/v0/api/component) - to define reusable page fragments.
- [`Page`](/en/v0/api/page) - to define a navigable page with `makePath(...)`.
- [`Component Interaction`](/en/v0/api/componentInteraction) - to create reusable interactions on a component's elements.
- [`Actions`](/en/v0/api/actions) - for ready-to-use actions on components.
- [`Assertions`](/en/v0/api/assertions) - for ready-to-use assertions on components.
