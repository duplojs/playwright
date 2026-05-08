import { createKindNamespace } from '@duplojs/utils';

const createDuplojsPlaywrightKind = createKindNamespace(
// @ts-expect-error reserved kind namespace
"DuplojsPlaywright");

export { createDuplojsPlaywrightKind };
