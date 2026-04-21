---
outline: [2, 3]
next:
  text: "Quick Start"
  link: "/en/v0/guide/quickStart/"
description: "Introduction to @duplojs/playwright, its philosophy, and its place above Playwright."
---

# Introduction

`@duplojs/playwright` is a light layer above Playwright to structure a test suite around the tested website.

The idea is not to replace Playwright, but to add a more readable model to it:

- a [`Website`](/en/v0/api/website) to carry the global test context
- [`Page`](/en/v0/api/page) objects for navigable screens
- [`Component`](/en/v0/api/component) objects for reusable interface fragments
- business helpers to avoid repeating the same intentions everywhere

## What the lib brings

- a stable way to organize the test suite as it grows
- a vocabulary closer to the tested website than to a set of locators
- reusable interactions and assertions
- more expressive Playwright steps in reports

## The philosophy

The goal is to test a website with business objects, not to write every test directly against `page.locator(...)`.

In concrete terms, instead of having selectors and helpers scattered across each test, the goal is to:

- centralize the website structure
- reuse frequent behaviors
- keep tests intention-oriented

## Minimal example

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/introduction/main.ts-->
```
::: tip What is happening here
- the extended Playwright client prepares [`createWebsite(...)`](/en/v0/api/website) once.
- [`createPage(...)`](/en/v0/api/page) describes a navigable screen.
- the test gets `website` from this client.
- `website.iNavigateTo(...)` lets you speak in terms of pages, not only in terms of URLs.
:::
