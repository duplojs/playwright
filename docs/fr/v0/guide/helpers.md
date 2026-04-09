---
outline: [2, 3]
prev:
  text: "Penser en specs"
  link: "/fr/v0/guide/specs/"
next:
  text: "GitHub Actions"
  link: "/fr/v0/guide/ci/githubActions/"
description: "Comprendre quand créer des helpers métier avec createComponentInteraction et createStepWrapper."
---

# Créer des helpers métier

Les helpers métier servent à faire remonter le bon niveau d'intention dans les tests.

## Quand rester avec `Actions` et `Assertions`

Dans beaucoup de cas, [`Actions`](/fr/v0/api/actions/) et [`Assertions`](/fr/v0/api/assertions/) suffisent déjà à couvrir le besoin.

## Quand passer à `createComponentInteraction`

Passe à [`createComponentInteraction(...)`](/fr/v0/api/componentInteraction/) quand tu veux encapsuler un comportement métier qui revient dans plusieurs tests.

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/helpers/interaction.ts-->
```

## Pourquoi `createStepWrapper`

[`createStepWrapper(...)`](/fr/v0/api/componentInteraction/#createstepwrapper) devient utile quand plusieurs interactions doivent apparaître ensemble sous un intitulé plus lisible dans le rapport Playwright.

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/helpers/wrapper.ts-->
```

## En pratique

Ces helpers prennent surtout de la valeur quand une même logique revient dans plusieurs tests, ou quand un nom métier aide à mieux lire le scénario.

Pour les signatures exactes :

- [API Component Interaction](/fr/v0/api/componentInteraction/)
- [API Actions](/fr/v0/api/actions/)
- [API Assertions](/fr/v0/api/assertions/)
