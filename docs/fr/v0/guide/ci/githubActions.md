---
outline: [2, 3]
prev:
  text: "Démarrage rapide"
  link: "/fr/v0/guide/quickStart/"
next:
  text: "GitLab CI"
  link: "/fr/v0/guide/ci/gitlabCI/"
description: "Exemple complet de flow GitHub Actions pour builder le projet puis exécuter les tests Playwright."
---

# GitHub Actions

Avec GitHub Actions, le plus simple est souvent de séparer le build et l'exécution des tests.

L'idée est la suivante :

- un job build le projet
- ce job publie `dist` comme artefact
- un second job télécharge cet artefact puis lance Playwright

Ce découpage est utile quand les tests doivent consommer la version réellement buildée du projet.

## Job de build

```yml
build:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: "24.x"
    - run: npm ci
    - run: npm run build
    - uses: actions/upload-artifact@v4
      with:
        name: dist
        path: ./dist
```

## Job Playwright

Le job Playwright peut ensuite télécharger cet artefact et tester la version réellement buildée :

```yml twoslash
playwright:
  runs-on: ubuntu-latest
  needs: build
  steps:
    - uses: actions/checkout@v4
    - uses: actions/download-artifact@v4
      with:
        name: dist
        path: ./dist
    - uses: actions/setup-node@v4
      with:
        node-version: "24.x"
    - run: npm ci
    - run: npx playwright install --with-deps
    - run: npm run test:playwright
```

## Artefacts utiles

```yml twoslash
    - run: npm run test:playwright
	// [!code focus:10]
    - if: always()
      uses: actions/upload-artifact@v4
      with:
        name: test-results
        path: test-results
    - if: always()
      uses: actions/upload-artifact@v4
      with:
        name: playwright-report
        path: playwright-report
```

Ces artefacts sont surtout utiles si tu veux récupérer les résultats bruts ou le rapport HTML après un échec.
