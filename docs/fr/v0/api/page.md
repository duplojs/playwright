---
outline: [2, 3]
prev:
  text: "Component Interaction"
  link: "/fr/v0/api/componentInteraction"
next:
  text: "Actions"
  link: "/fr/v0/api/actions"
description: "Définir une page navigable avec un chemin, des éléments et des méthodes réutilisables dans @duplojs/playwright."
---

# Page

`createPage` permet de décrire une page sur le même modèle qu'un composant, avec en plus une fonction `makePath(...)` pour construire son chemin.

En pratique, c'est la bonne abstraction quand un écran doit être à la fois navigable et manipulable comme un composant.

## Exemple simple

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/page/main.ts-->
```
::: tip Ce qui se passe ici
- l'exemple montre un client Playwright étendu, puis la définition de la page.
- `createPage(...)` décrit une page `article`.
- `makePath(...)` construit le chemin de navigation.
- `getMainElement(...)` définit l'élément principal de la page.
- la page expose ensuite ses éléments comme un composant classique.
:::

## Paramètres

- `name` - le nom public de la page dans le modèle de test.
- `params.makePath` - construit le chemin de la page.
- `params.getMainElement` - retourne le locator racine de la page.
- `params.getElements?` - expose des éléments nommés.
- `params.getMethods?` - expose des méthodes construites à partir du contexte de la page.
- `params.components?` - enregistre des sous-composants accessibles depuis la page.

## Syntaxe

```ts
interface CreatePageParams {
	makePath(...args: any[]): string;
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

type PageEngine = (website: Website) => Page;

interface Page extends Component {
	makePath(...args: any[]): string;
}
```

## À quoi ça sert ?

`Page` sert à réunir dans un même objet :

- la construction d'un chemin
- l'accès aux éléments d'un écran
- les méthodes propres à cette page
- la composition avec d'autres composants

Autrement dit, il permet de naviguer vers une page puis de la manipuler avec la même abstraction.

## Voir aussi

- [`Website`](/fr/v0/api/website) - pour naviguer vers une page avec `iNavigateTo(...)` ou `iGoTo(...)`.
- [`Component`](/fr/v0/api/component) - pour le modèle commun utilisé aussi par les pages.
- [`Component Interaction`](/fr/v0/api/componentInteraction) - pour créer des interactions réutilisables sur les éléments d'une page.
- [`Actions`](/fr/v0/api/actions) - pour les actions prêtes à l'emploi sur les éléments de la page.
- [`Assertions`](/fr/v0/api/assertions) - pour les assertions prêtes à l'emploi sur les éléments de la page.
