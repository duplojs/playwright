---
outline: [2, 3]
prev:
  text: "Component Interaction"
  link: "/en/v0/api/componentInteraction"
next:
  text: "Actions"
  link: "/en/v0/api/actions"
description: "Define a navigable page with a path, elements, and reusable methods in @duplojs/playwright."
---

# Page

`createPage` makes it possible to describe a page on the same model as a component, with the addition of a `makePath(...)` function to build its path.

In practice, it is the right abstraction when a screen must be both navigable and manipulable like a component.

## Simple example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/page/main.ts-->
```
::: tip What is happening here
- the example shows an extended Playwright client, then the page definition.
- `createPage(...)` describes an `article` page.
- `makePath(...)` builds the navigation path.
- `getMainElement(...)` defines the main element of the page.
- the page then exposes its elements like a regular component.
:::

## Parameters

- `name` - the public name of the page in the test model.
- `params.makePath` - builds the page path.
- `params.getMainElement` - returns the root locator of the page.
- `params.getElements?` - exposes named elements.
- `params.getMethods?` - exposes methods built from the page context.
- `params.components?` - registers sub-components accessible from the page.

## Syntax

```ts
interface CreatePageParams {
	makePath(...args: any[]): string;
	getMainElement(params: {
		body: Locator;
	}): Locator;
	getElements?(params: {
		mainElement: Locator;
		body: Locator;
	}): Record<string, Locator>;
	getMethods?(params: {
		mainElement: Locator;
		body: Locator;
		elements: Record<string, Locator> | undefined;
		website: Website;
	}): Record<string, (...args: any[]) => any>;
	components?: ComponentEngine[];
}

type PageEngine = (website: Website) => Page;

interface Page extends Component {
	makePath(...args: any[]): string;
}
```

## What is it for?

`Page` is used to bring together in the same object:

- path construction
- access to a screen's elements
- methods specific to this page
- composition with other components

In other words, it makes it possible to navigate to a page and then manipulate it with the same abstraction.

## See also

- [`Website`](/en/v0/api/website) - to navigate to a page with `iNavigateTo(...)` or `iGoTo(...)`.
- [`Component`](/en/v0/api/component) - for the common model also used by pages.
- [`Component Interaction`](/en/v0/api/componentInteraction) - to create reusable interactions on a page's elements.
- [`Actions`](/en/v0/api/actions) - for ready-to-use actions on the page's elements.
- [`Assertions`](/en/v0/api/assertions) - for ready-to-use assertions on the page's elements.
