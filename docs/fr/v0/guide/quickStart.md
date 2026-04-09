---
outline: [2, 3]
prev:
  text: "Introduction"
  link: "/fr/v0/guide/"
next:
  text: "Structurer ses tests"
  link: "/fr/v0/guide/structure/"
description: "Installer @duplojs/playwright, configurer Playwright et écrire un premier test."
---

# Démarrage rapide

Cette page montre le minimum pour lancer un premier test avec `@duplojs/playwright`.

## Installation

::: code-group

```bash [npm]
npm install -D playwright @duplojs/playwright @duplojs/utils
```

```bash [pnpm]
pnpm add -D playwright @duplojs/playwright @duplojs/utils
```

```bash [yarn]
yarn add -D playwright @duplojs/playwright @duplojs/utils
```

:::

Si Playwright n'est pas encore initialisé dans le projet :

::: code-group

```bash [npm]
npx playwright install --with-deps
```

```bash [pnpm]
pnpm exec playwright install --with-deps
```

```bash [yarn]
yarn playwright install --with-deps
```

:::

## Configuration Playwright `playwright.config.ts`

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/quickStart/playwrightConfig.ts-->
```
::: tip
Ici, la config reste minimale : Chromium, peu de workers en CI, et quelques artefacts utiles en cas d'échec.
:::

## Script `package.json`

```json
{
  "scripts": {
    "test:playwright": "playwright test -c playwright.config.ts"
  }
}
```

## Premier test

```ts twoslash
// @version: 0
<!--@include: @/examples/v0/guide/quickStart/firstTest.ts-->
```
::: tip Ce qui se passe ici
- le test crée un [`Website`](/fr/v0/api/website)
- il décrit une [`Page`](/fr/v0/api/page)
- puis il navigue vers cette page via `website.iNavigateTo(...)`
- enfin, il applique une assertion simple
:::

## Résultat attendu

<TerminalBlock title="Terminal">
  <div><span class="terminal-muted">$</span> npm run test:playwright</div>
  <br>
  <div><span class="terminal-info">Running 1 test using 1 worker</span></div>
  <div>&nbsp;<span class="terminal-success">✓</span> 1 [chromium] › tests/home.test.ts:1:1 › home page (133ms)</div>
  <div>  1 passed (842ms)</div>
</TerminalBlock>
