# Project Overview

This repository contains `@duplojs/playwright`, a TypeScript library built to make Playwright usage more structured, more reusable, and easier to scale across a real test suite.

The goal of the project is not to replace Playwright, but to provide a higher-level layer for organizing browser tests with reusable building blocks, stronger typing, and clearer testing flows.

## Library Philosophy

The library is designed around a few broad ideas:

- keep test code readable and close to real user intent
- encourage reuse instead of duplicating selectors and interaction logic
- make test structure explicit so large suites stay maintainable
- rely on TypeScript to surface contract changes and side effects early
- stay pragmatic: the library should help real Playwright usage, not hide it behind unnecessary abstraction

When working in the repository, prefer preserving these principles over introducing patterns that are technically possible but harder to maintain.

## Repository Structure

Use the repository layout to orient yourself before making changes.

- `scripts/`: main source code of the library
- `tests/`: unit tests for the source code
- `integration/`: integration tests that exercise the library in near-real usage conditions
- `dist/`: build output consumed by the published package interface
- `docs/`: documentation website sources
- `jsDoc/`: JSDoc markdown fragments and examples used in source includes and generated documentation

In most cases:

- start in `scripts/` to understand behavior
- check `tests/` to understand expected local behavior and regressions
- check `integration/` to understand consumer-facing usage
- check `docs/` and `jsDoc/` when the task affects public documentation or examples

## How To Navigate The Codebase

The best entry point depends on the task.

- For API changes: start from `scripts/index.ts` and follow exported symbols to their implementation files.
- For behavior changes: inspect the relevant source file in `scripts/`, then review matching unit tests in `tests/`.
- For consumer-usage questions: inspect `integration/` first, because it shows the library in a concrete scenario.
- For documentation work: inspect both `jsDoc/` and `docs/`, and make sure examples still match the current public API.

Do not assume the project structure is frozen. Always confirm the current export shape and current folder conventions from the repository itself.

## Documentation

The repository can contain two complementary documentation layers:

- `jsDoc/` for API-focused source documentation fragments and examples
- `docs/` for the documentation website and user-facing guides

When the documentation site grows, prefer thinking of `docs/` as the user-facing narrative layer, while `jsDoc/` stays closer to the source and API reference material.

If you update behavior or public contracts, verify whether the change should also be reflected in:

- JSDoc fragments
- documentation site pages
- integration examples

## Testing Strategy

The repository uses multiple kinds of tests, each with a different role.

### Unit Tests

Unit tests in `tests/` exist primarily to detect regressions when the implementation changes.

They are especially useful when:

- refactoring internal behavior
- adjusting helper logic
- changing branching or error handling
- verifying that a change did not accidentally alter existing behavior

If behavior changes intentionally, then the tests should change intentionally too. The goal is not to preserve old behavior at any cost, but to make regressions explicit.

### Type Tests

Type checks are a practical way to detect side effects when contracts move.

They are useful because a change in one part of the library can create consequences elsewhere in the codebase:

- a renamed field can break a helper
- a stricter generic can break call sites
- an exported type change can ripple into other modules

When you change a contract, assume there may be type-level consequences beyond the file you are editing.

### Integration Tests

Integration tests exist to validate that the library still works in a real or near-real usage scenario.

Their purpose is to confirm that the pieces still behave correctly when used together as a consumer would use them.

They are the closest check to real adoption inside this repository.

Important practical detail:

- if you modify code in `scripts/` and want to rerun integration tests, remember to build first when the integration flow depends on the built package output
- if you forget the build step after changing source code, the integration test can fail for the wrong reason by exercising stale `dist/` output

## Build Awareness

This project exposes its package from built files in `dist/`.

That means some workflows depend on the built output being up to date. If you touch source code and then validate a scenario that consumes the package as a package, be careful not to test stale artifacts.

When in doubt, rebuild before validating integration-level behavior.
