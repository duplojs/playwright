---
outline: [2, 3]
prev:
  text: "Component"
  link: "/en/v0/api/component"
next:
  text: "Page"
  link: "/en/v0/api/page"
description: "Create reusable interactions on a component's elements and group them into broader Playwright steps."
---

# Component Interaction

`createComponentInteraction` is used to create a reusable interaction on a declared element of a component.  
`createStepWrapper` is used to group several interactions under a broader Playwright step.

In practice, this is the basis for helpers like `Actions` and `Assertions`, but also the right level of abstraction when you want to write your own business interactions.

## createComponentInteraction

```ts
createComponentInteraction(stepName, step)
```

Creates a function called with the shape `interaction(component, elementKey, ...args)`.

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/componentInteraction/main.ts-->
```
::: tip
`createComponentInteraction(...)` creates a reusable interaction.  
It automatically receives `component`, `elementKey`, and `element`.
:::

### Parameters

- `stepName` - the label displayed in `test.step(...)`. `$component` and `$element` are replaced at runtime.
- `step` - the function executed for the interaction. It first receives `{ component, elementKey, element }`, then the business arguments.

## createStepWrapper

```ts
createStepWrapper(interactions)
```

Returns a function called with the shape `wrapper(stepName).method(...)`.

### Simple example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/componentInteraction/wrapper.ts-->
```
::: tip
The wrapper does not change the interactions.  
It makes it possible to group several calls under the same business title in the Playwright report.
:::

### Parameters

- `interactions` - an object whose values are already created interactions, for example with `createComponentInteraction(...)`.

## What is it for?

- create an interaction once, then reuse it on several components with the same shape
- surface more meaningful steps in the Playwright report
- build business helpers above a component's elements
- factor the building blocks then used by `Actions` or `Assertions`

## See also

- [`Component`](/en/v0/api/component) - to define the elements targeted by these interactions.
- [`Actions`](/en/v0/api/actions) - for the ready-to-use interactions built on this model.
- [`Assertions`](/en/v0/api/assertions) - for the ready-to-use checks built on this model.
