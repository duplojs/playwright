---
outline: [2, 3]
prev:
  text: "Website"
  link: "/en/v0/api/website"
next:
  text: "Component Interaction"
  link: "/en/v0/api/componentInteraction"
description: "Define a reusable component with its elements, methods, and sub-components in @duplojs/playwright."
---

# Component

`createComponent` makes it possible to describe a reusable interface fragment.  
A component defines where it is located, which elements it exposes, which methods it provides, and which sub-components it embeds.

In practice, it is the basic building block to avoid repeating selectors and helpers everywhere in the tests.

## Simple example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/component/main.ts-->
```
::: tip What is happening here
- the example shows an extended Playwright client, then the component definition.
- `createComponent(...)` describes a `searchForm` component.
- `getMainElement(...)` defines its root element.
- `getElements(...)` exposes reusable named locators.
- `getMethods(...)` makes it possible to group a simple business action in the component.
:::

## Parameters

- `name` - the public name of the component in the test model.
- `params.getMainElement` - returns the root locator of the component.
- `params.getElements?` - exposes named elements from the component.
- `params.getMethods?` - exposes methods built from the component context.
- `params.components?` - registers sub-components accessible from the component.

## Syntax

```ts
interface CreateComponentParams {
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

type ComponentEngine = (website: Website) => Component;

interface Component {
	name: string;
	mainElement: Locator;
	elements: Record<string, Locator> | undefined;
	methods: Record<string, (...args: any[]) => any> | undefined;
	iWantToSeeComponent(componentName: string): Promise<Component>;
}
```

## What is it for?

`Component` is used to centralize in the same place:

- the selectors of an interface block
- small reusable business actions
- composition between several interface fragments

In other words, it makes it possible to write more readable and more stable tests when the same interface area appears often.

## See also

- [`Website`](/en/v0/api/website) - to instantiate a component in a test context.
- [`Page`](/en/v0/api/page) - to build a page on the same model as a component, with `makePath(...)` in addition.
- [`Component Interaction`](/en/v0/api/componentInteraction) - to create reusable interactions on a component's elements.
- [`Actions`](/en/v0/api/actions) - for ready-to-use actions on components.
- [`Assertions`](/en/v0/api/assertions) - for ready-to-use assertions on components.
