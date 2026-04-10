---
outline: [2, 3]
prev:
  text: "Website"
  link: "/fr/v0/api/website"
next:
  text: "Component Interaction"
  link: "/fr/v0/api/componentInteraction"
description: "Définir un composant réutilisable avec ses éléments, ses méthodes et ses sous-composants dans @duplojs/playwright."
---

# Component

`createComponent` permet de décrire un fragment d'interface réutilisable.  
Un composant définit où il se trouve, quels éléments il expose, quelles méthodes il fournit et quels sous-composants il embarque.

En pratique, c'est la brique de base pour éviter de répéter des sélecteurs et des helpers partout dans les tests.

## Exemple simple

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/component/main.ts-->
```
::: tip Ce qui se passe ici
- l'exemple montre un client Playwright étendu, puis la définition du composant.
- `createComponent(...)` décrit un composant `searchForm`.
- `getMainElement(...)` définit son élément racine.
- `getElements(...)` expose des locators nommés réutilisables.
- `getMethods(...)` permet de regrouper une action métier simple dans le composant.
:::

## Paramètres

- `name` - le nom public du composant dans le modèle de test.
- `params.getMainElement` - retourne le locator racine du composant.
- `params.getElements?` - expose des éléments nommés à partir du composant.
- `params.getMethods?` - expose des méthodes construites à partir du contexte du composant.
- `params.components?` - enregistre des sous-composants accessibles depuis le composant.

## Syntaxe

```ts
interface CreateComponentParams {
	getMainElement(params: {
		body: Locator;
	}): Locator;
	getElements?(params: {
		mainElement: Locator;
		body: Locator;
	}): Record<string, Locator>;
	getMethods?(params: {
		mainElement: Locator;
		body: Locator;
		elements: Record<string, Locator> | undefined;
		website: Website;
	}): Record<string, (...args: any[]) => any>;
	components?: ComponentEngine[];
}

type ComponentEngine = (website: Website) => Component;

interface Component {
	name: string;
	mainElement: Locator;
	elements: Record<string, Locator> | undefined;
	methods: Record<string, (...args: any[]) => any> | undefined;
	iWantToSeeComponent(componentName: string): Promise<Component>;
}
```

## À quoi ça sert ?

`Component` sert à centraliser dans un même endroit :

- les sélecteurs d'un bloc d'interface
- les petites actions métier réutilisables
- la composition entre plusieurs fragments d'interface

Autrement dit, il permet d'écrire des tests plus lisibles et plus stables quand une même zone d'interface revient souvent.

## Voir aussi

- [`Website`](/fr/v0/api/website) - pour instancier un composant dans un contexte de test.
- [`Page`](/fr/v0/api/page) - pour construire une page sur le même modèle qu'un composant, avec en plus `makePath(...)`.
- [`Component Interaction`](/fr/v0/api/componentInteraction) - pour créer des interactions réutilisables sur les éléments d'un composant.
- [`Actions`](/fr/v0/api/actions) - pour les actions prêtes à l'emploi sur les composants.
- [`Assertions`](/fr/v0/api/assertions) - pour les assertions prêtes à l'emploi sur les composants.
