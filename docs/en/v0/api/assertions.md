---
outline: [2, 3]
prev:
  text: "Actions"
  link: "/en/v0/api/actions"
next:
  text: "API Reference"
  link: "/en/v0/api/"
description: "Overview of the ready-to-use assertions provided by Assertions in @duplojs/playwright."
---

# Assertions

`Assertions` groups the ready-to-use checks applied to a component and one of its element keys.

In practice, this namespace makes it possible to write expectations that are more readable and more consistent than a sequence of Playwright calls scattered across the tests.

## Simple example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/assertions/main.ts-->
```
::: tip What is happening here
- the component exposes named elements
- `Assertions.toHaveValue(...)` and `Assertions.toBeVisible(...)` target these elements directly
- the test stays focused on business verification rather than technical details
:::

## What is it for?

`Assertions` is mainly used to:

- share frequent expectations
- keep a consistent vocabulary in tests
- avoid repeating the same assertion sequences
- centralize enriched checks such as prior visibility

## toBeVisible

```ts
Assertions.toBeVisible(component, elementKey)
```

Checks that an element is visible.

## toHaveText

```ts
Assertions.toHaveText(component, elementKey, text)
```

Checks that an element has exactly the expected text.

## toContainText

```ts
Assertions.toContainText(component, elementKey, text)
```

Checks that an element contains the expected text.

## toHaveNoText

```ts
Assertions.toHaveNoText(component, elementKey)
```

Checks that an element has no text.

## toBeHidden

```ts
Assertions.toBeHidden(component, elementKey)
```

Checks that an element is hidden.

## toHaveQuantity

```ts
Assertions.toHaveQuantity(component, elementKey, {
  quantity,
  operator?,
})
```

Checks the number of elements matching a locator.

## toBeEnabled

```ts
Assertions.toBeEnabled(component, elementKey)
```

Checks that an element is enabled.

## toBeChecked

```ts
Assertions.toBeChecked(component, elementKey)
```

Checks that an element is checked.

## toBeDisabled

```ts
Assertions.toBeDisabled(component, elementKey)
```

Checks that an element is disabled.

## toHaveAttribute

```ts
Assertions.toHaveAttribute(component, elementKey, name, value?)
```

Checks that an element has an expected attribute.

## toHaveClass

```ts
Assertions.toHaveClass(component, elementKey, value)
```

Checks that an element has the expected class.

## toHaveValue

```ts
Assertions.toHaveValue(component, elementKey, value)
```

Checks that an element has the expected value.

## toBeBusy

```ts
Assertions.toBeBusy(component, elementKey)
```

Checks that an element has `aria-busy="true"`.

## toBeNotBusy

```ts
Assertions.toBeNotBusy(component, elementKey)
```

Checks that an element has `aria-busy="false"`.

## withStep

```ts
Assertions.withStep(label).assertion(component, elementKey, ...args)
```

Returns the same assertions, but grouped under a custom `test.step(...)`.
The useful call is then chained on the returned wrapper.

## See also

- [`Actions`](/en/v0/api/actions) - for ready-to-use interactions on components.
- [`Component`](/en/v0/api/component) - to define the elements the assertions apply to.
- [`Component Interaction`](/en/v0/api/componentInteraction) - to create custom checks if the provided assertions are not enough.
