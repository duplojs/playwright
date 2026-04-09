---
outline: [2, 3]
prev:
  text: "GitHub Actions"
  link: "/fr/v0/guide/ci/githubActions/"
description: "Exemple complet de flow GitLab CI pour builder le projet puis exécuter les tests Playwright."
---

# GitLab CI

Avec GitLab CI, le plus simple est souvent de séparer le build et l'exécution des tests.

L'idée est la suivante :

- un stage build le projet
- ce stage conserve `dist` comme artefact
- le stage suivant récupère cet artefact puis lance Playwright

Ce découpage est utile quand les tests doivent consommer la version réellement buildée du projet.

## Flow complet

```yml
stages:
  - build
  - test

build:
  image: node:24
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

playwright:
  image: mcr.microsoft.com/playwright:v1.59.1-noble
  stage: test
  dependencies:
    - build
  script:
    - npm ci
    - npm run test:playwright
```

## Ce que montre cet exemple

- un job `build` produit `dist/`
- GitLab conserve cet artefact pour le stage suivant
- le job `playwright` récupère cette version buildée puis lance les tests

Le flow exact peut varier selon le projet, mais la logique générale reste la même.
