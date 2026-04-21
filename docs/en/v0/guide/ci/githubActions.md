---
outline: [2, 3]
prev:
  text: "Quick Start"
  link: "/en/v0/guide/quickStart/"
next:
  text: "GitLab CI"
  link: "/en/v0/guide/ci/gitlabCI/"
description: "Complete example of a GitHub Actions flow to build the project and then run Playwright tests."
---

# GitHub Actions

With GitHub Actions, the simplest approach is often to separate the build and the test execution.

The idea is as follows:

- one job builds the project
- this job publishes `dist` as an artifact
- a second job downloads this artifact and then runs Playwright

This split is useful when the tests must consume the actually built version of the project.

## Build job

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

## Playwright job

The Playwright job can then download this artifact and test the actually built version:

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

## Useful artifacts

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

These artifacts are mainly useful if you want to retrieve the raw results or the HTML report after a failure.
