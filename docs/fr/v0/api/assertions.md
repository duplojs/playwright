---
outline: [2, 3]
prev:
  text: "Actions"
  link: "/fr/v0/api/actions/"
next:
  text: "Référence API"
  link: "/fr/v0/api/"
description: "Vue d'ensemble des assertions prêtes à l'emploi fournies par Assertions dans @duplojs/playwright."
---

# Assertions

`Assertions` regroupe les vérifications prêtes à l'emploi appliquées à un composant et à l'une de ses clés d'élément.

En pratique, cette namespace permet d'écrire des attentes plus lisibles et plus homogènes qu'une succession d'appels Playwright dispersés dans les tests.

## Exemple simple

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/assertions/main.ts-->
```
::: tip Ce qui se passe ici
- le composant expose des éléments nommés
- `Assertions.toHaveValue(...)` et `Assertions.toBeVisible(...)` ciblent ces éléments directement
- le test reste orienté vérification métier plutôt que détail technique
:::

## À quoi ça sert ?

`Assertions` sert surtout à :

- mutualiser les attentes fréquentes
- garder un vocabulaire cohérent dans les tests
- éviter de répéter les mêmes séquences d'assertions
- centraliser des vérifications enrichies comme la visibilité préalable

## toBeVisible

```ts
Assertions.toBeVisible(component, elementKey)
```

Vérifie qu'un élément est visible.

## toHaveText

```ts
Assertions.toHaveText(component, elementKey, text)
```

Vérifie qu'un élément possède exactement le texte attendu.

## toContainText

```ts
Assertions.toContainText(component, elementKey, text)
```

Vérifie qu'un élément contient le texte attendu.

## toHaveNoText

```ts
Assertions.toHaveNoText(component, elementKey)
```

Vérifie qu'un élément n'a pas de texte.

## toBeHidden

```ts
Assertions.toBeHidden(component, elementKey)
```

Vérifie qu'un élément est caché.

## toHaveQuantity

```ts
Assertions.toHaveQuantity(component, elementKey, {
  quantity,
  operator?,
})
```

Vérifie le nombre d'éléments correspondant à un locator.

## toBeEnabled

```ts
Assertions.toBeEnabled(component, elementKey)
```

Vérifie qu'un élément est activé.

## toBeChecked

```ts
Assertions.toBeChecked(component, elementKey)
```

Vérifie qu'un élément est coché.

## toBeDisabled

```ts
Assertions.toBeDisabled(component, elementKey)
```

Vérifie qu'un élément est désactivé.

## toHaveAttribute

```ts
Assertions.toHaveAttribute(component, elementKey, name, value?)
```

Vérifie qu'un élément possède un attribut attendu.

## toHaveClass

```ts
Assertions.toHaveClass(component, elementKey, value)
```

Vérifie qu'un élément possède la classe attendue.

## toHaveValue

```ts
Assertions.toHaveValue(component, elementKey, value)
```

Vérifie qu'un élément possède la valeur attendue.

## toBeBusy

```ts
Assertions.toBeBusy(component, elementKey)
```

Vérifie qu'un élément porte `aria-busy="true"`.

## toBeNotBusy

```ts
Assertions.toBeNotBusy(component, elementKey)
```

Vérifie qu'un élément porte `aria-busy="false"`.

## withStep

```ts
Assertions.withStep(label).assertion(component, elementKey, ...args)
```

Retourne les mêmes assertions, mais regroupées sous un `test.step(...)` personnalisé.
L'appel utile est ensuite chaîné sur le wrapper retourné.

## Voir aussi

- [`Actions`](/fr/v0/api/actions/) - pour les interactions prêtes à l'emploi sur les composants.
- [`Component`](/fr/v0/api/component/) - pour définir les éléments sur lesquels les assertions s'appliquent.
- [`Component Interaction`](/fr/v0/api/componentInteraction/) - pour créer des vérifications personnalisées si les assertions fournies ne suffisent pas.
