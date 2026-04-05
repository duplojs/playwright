
import test, { type Locator as PlaywrightLocator } from "playwright/test";
import type { Component, ComponentElements } from "./component";
import { kindHeritage } from "@duplojs/utils";
import { createDuplojsPlaywrightKind } from "./kind";

interface ContextStepEmbedded {
	component: Component<string, ComponentElements>;
	elementKey: string;
	element: PlaywrightLocator;
}

export type StepEmbeddedFunction = (context: ContextStepEmbedded, ...args: any) => any;

interface MissingComponentElementErrorParams {
	componentName: string;
	elementKey: string;
	availableElements: string[];
}

const missingComponentElementErrorKind = createDuplojsPlaywrightKind<
	"missing-component-element-error",
	MissingComponentElementErrorParams
>("missing-component-element-error");

export class MissingComponentElementError extends kindHeritage(
	"missing-component-element-error",
	missingComponentElementErrorKind,
	Error,
) {
	public constructor(params: MissingComponentElementErrorParams) {
		super(
			{
				[missingComponentElementErrorKind.definition.name]: params,
			},
			[
				[
					`Missing element "${params.elementKey}" on component "${params.componentName}".`,
					`Available elements: ${params.availableElements.join(", ") || "none"}.`,
				].join(" "),
			],
		);
	}
}
export function createComponentInteraction<
	GenericStepEmbeddedFunction extends StepEmbeddedFunction,
>(
	stepName: string,
	step: GenericStepEmbeddedFunction,
) {
	return <
		GenericComponent extends Component<string, Record<string, PlaywrightLocator>, any, any>,
		GenericElementKey extends Extract<keyof GenericComponent["elements"], string>,
	>(
		component: GenericComponent,
		elementKey: GenericElementKey,
		...args: Parameters<GenericStepEmbeddedFunction> extends [any, ...infer InferredRest] ? InferredRest : never
	) => {
		const element = component.elements?.[elementKey];

		if (!element) {
			throw new MissingComponentElementError({
				componentName: component.name,
				elementKey: elementKey.toString(),
				availableElements: Object.keys(component.elements ?? {}),
			});
		}

		return test.step(
			stepName
				.replace("$component", component.name)
				.replace("$element", elementKey.toString()),
			() => step(
				{
					element,
					component,
					elementKey,
				},
				...args,
			),
		);
	};
}

export type WrapperStepEmbeddedFunction = Record<string, ReturnType<typeof createComponentInteraction>>;

export function createStepWrapper<
	GenericWrapperStepEmbeddedFunction extends WrapperStepEmbeddedFunction,
>(
	wrapperStepEmbeddedFunction: GenericWrapperStepEmbeddedFunction,
) {
	return (stepName: string) => new Proxy(
		wrapperStepEmbeddedFunction,
		{
			get(target, prop: string) {
				const wrappedStep = target[
					prop as keyof GenericWrapperStepEmbeddedFunction
				] as (...args: unknown[]) => unknown;

				return (...args: unknown[]) => test.step(stepName, () => wrappedStep(...args));
			},
		},
	) as GenericWrapperStepEmbeddedFunction;
}
