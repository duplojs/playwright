---
outline: [2, 3]
prev:
  text: "Référence API"
  link: "/fr/v0/api/"
next:
  text: "Component"
  link: "/fr/v0/api/component/"
description: "Créer le contexte Website central pour naviguer, vérifier des pages et utiliser les helpers partagés de @duplojs/playwright."
---

# Website

`createWebsite` crée l'objet central utilisé pendant un test d'intégration.  
Il relie une `Page` Playwright, un `BrowserContext`, la configuration d'environnement et plusieurs helpers de navigation ou d'assertion dans une seule interface.

En pratique, c'est souvent le point d'entrée principal d'un scénario de test.

## Approche 1: test direct

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/website/direct.ts-->
```
::: tip Ce qui se passe ici
- `createPage(...)` décrit une page navigable avec son chemin et son élément principal.
- `createWebsite(...)` assemble le contexte Playwright et la configuration d'URL.
- `website.iNavigateTo(...)` construit l'URL finale, ouvre la page, vérifie l'URL puis vérifie que la page est visible.
- `website.iExpectTitleIs(...)` et `website.iWantToBeOnPage(...)` montrent le rôle du `Website`: centraliser les actions et vérifications les plus fréquentes.
:::

Cette approche est pratique quand le setup reste simple ou très local au test.

## Approche 2: client Playwright étendu

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/api/website/client.ts-->
```
::: tip Ce qui se passe ici
- le `Website` est préparé une fois dans un fixture Playwright personnalisé
- chaque test récupère directement `website` depuis le client
- on pense plus facilement en mode spec: le `describe(...)` porte la spec, les tests internes couvrent ses cas
:::

Cette approche est utile quand un même site est utilisé partout dans la suite de tests.  
Elle évite de reconstruire le `Website` dans chaque test et pousse naturellement vers une organisation par spec.

## Paramètres

- `params.playwrightPage` - la `Page` Playwright portée par le `Website`.
- `params.playwrightBrowserContext` - le `BrowserContext` Playwright, notamment pour des helpers comme `addCookies(...)`.
- `params.envConfig` - la configuration utilisée pour construire les URLs.
- `params.envConfig.baseUrl?` - l'URL de base.
- `params.envConfig.prefix?` - un préfixe ajouté avant le chemin de la page.
- `params.hooks?` - des hooks exécutés autour de la navigation.
- `params.hooks.beforeNavigateOnPage?()` - appelé avant une navigation.
- `params.hooks.afterNavigateOnPage?()` - appelé après une navigation.

## Syntaxe

```ts
interface CreateWebsiteParams {
	playwrightPage: PlaywrightPage;
	playwrightBrowserContext: BrowserContext;
	envConfig: {
		baseUrl?: string;
		prefix?: string;
	};
	hooks?: {
		beforeNavigateOnPage?(): void | Promise<void>;
		afterNavigateOnPage?(): void | Promise<void>;
	};
}

interface Website {
	playwrightPage: PlaywrightPage;
	iNavigateTo(page, ...args): Promise<Page>;
	iGoTo(page, ...args): Promise<Page>;
	iWantToBeOnPage(page): Promise<Page>;
	iWantToSee(component): Promise<Component>;
	iWantToExist(component): Promise<Component>;
	iExpectTitleIs(title: string | RegExp): Promise<void>;
	iExpectUrlIs(url: string | RegExp): Promise<void>;
	addCookies(...args): Promise<void>;
	refresh(): Promise<void>;
	setPrefix(prefix?: string): void;
	waitForHydration(): Promise<void>;
}
```

## À quoi ça sert ?

`Website` sert à éviter de répéter partout:

- la construction d'URL
- les appels directs à `page.goto(...)`
- les assertions récurrentes sur l'URL, le titre ou la présence d'une page
- les helpers transverses comme le refresh, l'hydratation ou les cookies

Autrement dit, il joue le rôle de façade de haut niveau pour piloter un site dans un test.

## Quelle approche choisir ?

- approche directe: bien pour démarrer ou pour un test isolé
- client étendu: bien quand tout le projet cible un seul site et que tu veux structurer tes tests par spec

## Voir aussi

- [`Component`](/fr/v0/api/component/) - pour définir des fragments réutilisables de page.
- [`Page`](/fr/v0/api/page/) - pour définir une page navigable avec `makePath(...)`.
- [`Component Interaction`](/fr/v0/api/componentInteraction/) - pour créer des interactions réutilisables sur les éléments d'un composant.
- [`Actions`](/fr/v0/api/actions/) - pour les actions prêtes à l'emploi sur les composants.
- [`Assertions`](/fr/v0/api/assertions/) - pour les assertions prêtes à l'emploi sur les composants.
