Assert that a declared component element is not busy.

`Assertions.toBeNotBusy(component, elementKey)` first ensures visibility, then checks `aria-busy="false"` on the target element.

```ts
{@include assertions/toBeNotBusy/example.ts[5,18]}
```

@see https://playwright.duplojs.dev/en/v0/api/assertions#toBeNotBusy
@see [`Assertions.toBeBusy`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeBusy) For the opposite busy state.
@namespace Assertions
