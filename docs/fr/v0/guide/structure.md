---
outline: [2, 3]
prev:
  text: "Démarrage rapide"
  link: "/fr/v0/guide/quickStart/"
next:
  text: "Penser en specs"
  link: "/fr/v0/guide/specs/"
description: "Comprendre quand créer un Website, une Page, un Component ou une interaction custom."
---

# Structurer ses tests

Cette page aide surtout à comprendre comment découper une suite de tests avec les bonnes briques, au bon moment.

## Quand créer un `Website`

`Website` devient pertinent quand le test commence à manipuler un vrai site :

- navigation
- assertions d'URL ou de titre
- cookies
- hooks autour des changements de page

Pour le détail de `createWebsite(...)`, voir l'[API Website](/fr/v0/api/website/).

## Quand créer une `Page`

`Page` devient pertinente quand un écran est à la fois :

- navigable
- identifiable par un chemin
- manipulé comme un objet dans plusieurs tests

Pour le détail de `createPage(...)`, voir l'[API Page](/fr/v0/api/page/).

## Quand créer un `Component`

`Component` devient pertinent quand une zone d'interface revient souvent, ou quand ses locators commencent à se disperser dans plusieurs tests.

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/structure/component.ts-->
```

Pour le détail de `createComponent(...)`, voir l'[API Component](/fr/v0/api/component/).

## Quand utiliser `Actions` et `Assertions`

`Actions` et `Assertions` couvrent déjà des besoins fréquents comme :

- cliquer
- remplir un champ
- vérifier une valeur
- vérifier la visibilité

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/structure/actionsAssertions.ts-->
```

Pour la liste complète, voir :

- [API Actions](/fr/v0/api/actions/)
- [API Assertions](/fr/v0/api/assertions/)

## Quand créer une interaction custom

Une interaction custom devient pertinente quand :

- plusieurs tests répètent la même séquence
- le besoin n'existe pas dans `Actions` ou `Assertions`
- tu veux un helper plus métier qu'un appel Playwright brut

Pour le détail, voir l'[API Component Interaction](/fr/v0/api/componentInteraction/).
