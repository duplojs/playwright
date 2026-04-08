Assert that a declared component element is busy.

`Assertions.toBeBusy(component, elementKey)` first ensures visibility, then checks `aria-busy="true"` on the target element.

```ts
{@include assertions/toBeBusy/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toBeBusy
@see [`Assertions.toBeNotBusy`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeNotBusy) For the opposite busy state.
@namespace Assertions
