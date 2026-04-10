---
outline: [2, 3]
next:
  text: "Démarrage rapide"
  link: "/fr/v0/guide/quickStart/"
description: "Introduction à @duplojs/playwright, sa philosophie et sa place au-dessus de Playwright."
---

# Introduction

`@duplojs/playwright` est une surcouche légère au-dessus de Playwright pour structurer une suite de tests autour du site testé.

L'idée n'est pas de remplacer Playwright, mais de lui ajouter un modèle plus lisible :

- un [`Website`](/fr/v0/api/website) pour porter le contexte global du test
- des [`Page`](/fr/v0/api/page) pour les écrans navigables
- des [`Component`](/fr/v0/api/component) pour les fragments d'interface réutilisables
- des helpers métier pour éviter de répéter les mêmes intentions partout

## Ce que la lib apporte

- une manière stable d'organiser la suite de tests quand elle grossit
- un vocabulaire plus proche du site testé que d'une suite de locators
- des interactions et assertions réutilisables
- des steps Playwright plus parlants dans les rapports

## La philosophie

Le but est de tester un site avec des objets métier, pas d'écrire tous les tests directement contre `page.locator(...)`.

Concrètement, au lieu d'avoir des sélecteurs et des helpers dispersés dans chaque test, on cherche à :

- centraliser la structure du site
- réutiliser les comportements fréquents
- garder des tests orientés intention

## Exemple minimal

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/introduction/main.ts-->
```
::: tip Ce qui se passe ici
- le client Playwright étendu prépare [`createWebsite(...)`](/fr/v0/api/website) une fois.
- [`createPage(...)`](/fr/v0/api/page) décrit un écran navigable.
- le test récupère `website` depuis ce client.
- `website.iNavigateTo(...)` permet de parler en termes de page, pas seulement en termes d'URL.
:::
