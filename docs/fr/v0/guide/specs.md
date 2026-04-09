---
outline: [2, 3]
prev:
  text: "Structurer ses tests"
  link: "/fr/v0/guide/structure/"
next:
  text: "Créer des helpers métier"
  link: "/fr/v0/guide/helpers/"
description: "Organiser une suite de tests par spec, entre approche directe et client étendu."
---

# Penser en specs

Une suite Playwright reste lisible plus longtemps quand elle est organisée autour de specs, pas seulement autour de cas isolés.

## Deux approches possibles

### Test direct

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/specs/direct.ts-->
```

Cette approche convient bien si :

- le setup reste local
- le test est isolé
- tu veux démarrer vite

### Client Playwright étendu

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/specs/client.ts-->
```

Cette approche convient bien si :

- tout le projet cible le même site
- tu veux partager le [`Website`](/fr/v0/api/website/), mais aussi les [`Page`](/fr/v0/api/page/), [`Component`](/fr/v0/api/component/) et interactions entre plusieurs specs
- tu veux penser en mode spec : un `describe`, puis plusieurs cas qui couvrent cette spec

## Où mettre le setup commun

- dans un test direct si le besoin est très local
- dans un fixture Playwright étendu si le [`Website`](/fr/v0/api/website/) est partagé par toute la suite
- dans une couche "app" si les pages, composants et interactions doivent être réutilisés dans plusieurs specs

L'intérêt n'est pas seulement de mutualiser un setup Playwright.  
Elle permet aussi de décrire une fois l'application testée, puis de réutiliser cette base dans plusieurs specs.

Concrètement, un bouton reste un bouton, un champ reste un champ, et un composant générique peut être appelé dans plusieurs specs différentes.  
L'idée est donc d'avoir une architecture de tests pratique à faire évoluer :

```text
tests/
  app/
    website.ts
    pages/
    components/
    interactions/
  specs/
    authentication.spec.ts
    checkout.spec.ts
    profile.spec.ts
```

Dans cette logique :

- `app/` décrit le site, ses pages, ses composants et ses interactions réutilisables
- `specs/` contient les scénarios métier qui consomment cette base

Cette séparation peut aider à relire et faire évoluer la suite quand plusieurs specs partagent les mêmes briques.
