---
outline: [2, 3]
prev:
  text: "Component"
  link: "/fr/v0/api/component/"
next:
  text: "Page"
  link: "/fr/v0/api/page/"
description: "Créer des interactions réutilisables sur les éléments d'un composant et les regrouper dans des étapes Playwright."
---

# Component Interaction

`createComponentInteraction` sert à créer une interaction réutilisable sur un élément déclaré d'un composant.  
`createStepWrapper` sert à regrouper plusieurs interactions sous une étape Playwright plus large.

En pratique, c'est la base des helpers comme `Actions` et `Assertions`, mais aussi le bon niveau d'abstraction quand tu veux écrire tes propres interactions métier.

## createComponentInteraction

```ts
createComponentInteraction(stepName, step)
```

Crée une fonction appelée avec la forme `interaction(component, elementKey, ...args)`.

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/componentInteraction/main.ts-->
```
::: tip
`createComponentInteraction(...)` crée une interaction réutilisable.  
Elle reçoit automatiquement `component`, `elementKey` et `element`.
:::

### Paramètres

- `stepName` - le libellé affiché dans `test.step(...)`. `$component` et `$element` sont remplacés à l'exécution.
- `step` - la fonction exécutée pour l'interaction. Elle reçoit d'abord `{ component, elementKey, element }`, puis les arguments métier.

## createStepWrapper

```ts
createStepWrapper(interactions)
```

Retourne une fonction appelée avec la forme `wrapper(stepName).method(...)`.

### Exemple simple

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/componentInteraction/wrapper.ts-->
```
::: tip
Le wrapper ne change pas les interactions.  
Il permet de regrouper plusieurs appels sous un même intitulé métier dans le rapport Playwright.
:::

### Paramètres

- `interactions` - un objet dont les valeurs sont des interactions déjà créées, par exemple avec `createComponentInteraction(...)`.

## À quoi ça sert ?

- créer une interaction une fois puis la réutiliser sur plusieurs composants du même shape
- faire remonter des étapes plus parlantes dans le rapport Playwright
- construire des helpers métier au-dessus des éléments d'un composant
- factoriser les briques utilisées ensuite par `Actions` ou `Assertions`

## Voir aussi

- [`Component`](/fr/v0/api/component/) - pour définir les éléments ciblés par ces interactions.
- [`Actions`](/fr/v0/api/actions/) - pour les interactions prêtes à l'emploi construites sur ce modèle.
- [`Assertions`](/fr/v0/api/assertions/) - pour les vérifications prêtes à l'emploi construites sur ce modèle.
