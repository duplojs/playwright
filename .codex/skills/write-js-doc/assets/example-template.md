```ts
import { SymbolToDocument } from "@duplojs/playwright";
import type { ExtraTypeUsedOnlyForTyping } from "@duplojs/playwright";

interface ExampleSetup extends ExtraTypeUsedOnlyForTyping {}

function buildExampleSetup(): ExampleSetup {
	return {} as ExampleSetup;
}

const setup = buildExampleSetup();

// Keep the include focused on the useful part of the example.
const firstExample = SymbolToDocument;
const secondExample = SymbolToDocument;

// Optional: explain the visible result when it helps understanding.
// Result: this call returns or configures ...
```

Suggested include:

```md
{@include path/to/example.ts[10,16]}
```
