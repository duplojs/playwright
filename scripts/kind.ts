import { createKindNamespace } from "@duplojs/utils";

declare module "@duplojs/utils" {
	interface ReservedKindNamespace {
		DuplojsPlaywright: true;
	}
}

export const createDuplojsPlaywrightKind = createKindNamespace(
	// @ts-expect-error reserved kind namespace
	"DuplojsPlaywright",
);
