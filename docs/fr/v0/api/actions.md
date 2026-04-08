---
outline: [2, 3]
prev:
  text: "Page"
  link: "/fr/v0/api/page/"
next:
  text: "Assertions"
  link: "/fr/v0/api/assertions/"
description: "Vue d'ensemble des actions prêtes à l'emploi fournies par Actions dans @duplojs/playwright."
---

# Actions

`Actions` regroupe les interactions prêtes à l'emploi appliquées à un composant et à l'une de ses clés d'élément.

En pratique, cette namespace évite d'écrire les appels Playwright bas niveau partout dans les tests et donne un vocabulaire plus homogène à la suite.

## Exemple simple

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/actions/main.ts-->
```
::: tip Ce qui se passe ici
- le composant expose des éléments nommés
- `Actions.fill(...)` et `Actions.click(...)` s'appuient sur ces clés d'élément
- le test reste centré sur l'intention plutôt que sur les appels Playwright bruts
:::

## À quoi ça sert ?

`Actions` sert surtout à :

- mutualiser les interactions fréquentes
- garder un style d'écriture homogène
- réutiliser les mêmes comportements sur plusieurs composants
- éviter de disperser les appels locator dans les tests

## click

```ts
Actions.click(component, elementKey)
```

Clique sur un élément déclaré du composant.

## forceClick

```ts
Actions.forceClick(component, elementKey)
```

Force un clic avec `click({ force: true })`.

## hover

```ts
Actions.hover(component, elementKey)
```

Survole un élément déclaré du composant.

## focus

```ts
Actions.focus(component, elementKey)
```

Donne le focus à un élément déclaré du composant.

## fill

```ts
Actions.fill(component, elementKey, content)
```

Remplit un élément avec une valeur texte.

## type

```ts
Actions.type(component, elementKey, text, options?)
```

Tape du texte séquentiellement dans un élément.

## clear

```ts
Actions.clear(component, elementKey)
```

Vide la valeur actuelle d'un élément.

## press

```ts
Actions.press(component, elementKey, key)
```

Envoie une touche clavier à un élément.

## check

```ts
Actions.check(component, elementKey)
```

Coche un élément compatible.

## uncheck

```ts
Actions.uncheck(component, elementKey)
```

Décoche un élément compatible.

## selectOption

```ts
Actions.selectOption(component, elementKey, values)
```

Sélectionne une ou plusieurs options sur un élément.

## dragTo

```ts
Actions.dragTo(component, elementKey, target, options?)
```

Déplace un élément vers un locator cible.

## extractContent

```ts
Actions.extractContent(component, elementKey)
```

Retourne le contenu texte d'un élément.

## withStep

```ts
Actions.withStep(label).action(component, elementKey, ...args)
```

Retourne les mêmes actions, mais regroupées sous un `test.step(...)` personnalisé.
L'appel utile est ensuite chaîné sur le wrapper retourné.

## Voir aussi

- [`Assertions`](/fr/v0/api/assertions/) - pour les vérifications prêtes à l'emploi sur les composants.
- [`Component`](/fr/v0/api/component/) - pour définir les éléments sur lesquels les actions s'appliquent.
- [`Component Interaction`](/fr/v0/api/componentInteraction/) - pour créer des interactions personnalisées si les actions fournies ne suffisent pas.
