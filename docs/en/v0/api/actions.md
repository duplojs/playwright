---
outline: [2, 3]
prev:
  text: "Page"
  link: "/en/v0/api/page"
next:
  text: "Assertions"
  link: "/en/v0/api/assertions"
description: "Overview of the ready-to-use actions provided by Actions in @duplojs/playwright."
---

# Actions

`Actions` groups the ready-to-use interactions applied to a component and one of its element keys.

In practice, this namespace avoids writing low-level Playwright calls everywhere in the tests and gives the suite a more consistent vocabulary.

## Simple example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/actions/main.ts-->
```
::: tip What is happening here
- the component exposes named elements
- `Actions.fill(...)` and `Actions.click(...)` rely on these element keys
- the test stays focused on intention rather than raw Playwright calls
:::

## What is it for?

`Actions` is mainly used to:

- share frequent interactions
- keep a consistent writing style
- reuse the same behaviors across several components
- avoid scattering locator calls in tests

## click

```ts
Actions.click(component, elementKey)
```

Clicks a declared element of the component.

## forceClick

```ts
Actions.forceClick(component, elementKey)
```

Forces a click with `click({ force: true })`.

## hover

```ts
Actions.hover(component, elementKey)
```

Hovers over a declared element of the component.

## focus

```ts
Actions.focus(component, elementKey)
```

Focuses a declared element of the component.

## fill

```ts
Actions.fill(component, elementKey, content)
```

Fills an element with a text value.

## type

```ts
Actions.type(component, elementKey, text, options?)
```

Types text sequentially into an element.

## clear

```ts
Actions.clear(component, elementKey)
```

Clears the current value of an element.

## press

```ts
Actions.press(component, elementKey, key)
```

Sends a keyboard key to an element.

## check

```ts
Actions.check(component, elementKey)
```

Checks a compatible element.

## uncheck

```ts
Actions.uncheck(component, elementKey)
```

Unchecks a compatible element.

## selectOption

```ts
Actions.selectOption(component, elementKey, values)
```

Selects one or more options on an element.

## dragTo

```ts
Actions.dragTo(component, elementKey, target, options?)
```

Moves an element to a target locator.

## extractContent

```ts
Actions.extractContent(component, elementKey)
```

Returns the text content of an element.

## withStep

```ts
Actions.withStep(label).action(component, elementKey, ...args)
```

Returns the same actions, but grouped under a custom `test.step(...)`.
The useful call is then chained on the returned wrapper.

## See also

- [`Assertions`](/en/v0/api/assertions) - for ready-to-use checks on components.
- [`Component`](/en/v0/api/component) - to define the elements the actions apply to.
- [`Component Interaction`](/en/v0/api/componentInteraction) - to create custom interactions if the provided actions are not enough.
