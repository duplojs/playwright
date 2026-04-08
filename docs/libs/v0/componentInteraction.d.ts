import { type Locator as PlaywrightLocator } from "playwright/test";
import type { Component, ComponentElements } from "./component";
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
declare const MissingComponentElementError_base: new (params: {
    "@DuplojsPlaywright/missing-component-element-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => import("@duplojs/utils").Kind<import("@duplojs/utils").KindDefinition<"@DuplojsPlaywright/missing-component-element-error", unknown>, unknown> & import("@duplojs/utils").Kind<import("@duplojs/utils").KindDefinition<"missing-component-element-error", unknown>, unknown> & Error;
export declare class MissingComponentElementError extends MissingComponentElementError_base {
    params: MissingComponentElementErrorParams;
    constructor(params: MissingComponentElementErrorParams);
}
/**
 * Create a reusable component interaction wrapped in a Playwright step.
 * 
 * `createComponentInteraction(stepName, step)` builds a function meant to run against one declared component element. It resolves the target element from `component.elements`, injects a small execution context into `step`, and wraps the whole call in `test.step`.
 * 
 * Use it when you want to define an interaction once, then reuse it across components of the same shape.
 * 
 * - `stepName` is the displayed Playwright step label. `$component` and `$element` are replaced at call time.
 * - `step` receives `{ component, elementKey, element }` as its first argument, then the custom arguments passed by the caller.
 * 
 * The returned function is used with the signature `interaction(component, elementKey, ...args)`.
 * 
 * ```ts
 * const clickOn = createComponentInteraction(
 * 	"$component: I click on $element.",
 * 	async({ element }) => {
 * 		await element.click();
 * 	},
 * );
 * 
 * const searchForm = createComponent(
 * 	"searchForm",
 * 	{
 * 		getMainElement({ body }) {
 * 			return body.locator("[data-search-form]");
 * 		},
 * 		getElements({ mainElement }) {
 * 			return {
 * 				submitButton: mainElement.locator("button[type='submit']"),
 * 			};
 * 		},
 * 	},
 * );
 * 
 * const component = searchForm(website);
 * 
 * await clickOn(component, "submitButton");
 * ```
 * 
 * @remarks
 * 
 * If the requested element is missing from `component.elements`, the returned function throws `MissingComponentElementError` before calling the embedded step.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/componentInteraction
 * @see [`createStepWrapper`](https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper) To wrap several interactions under a larger custom step.
 * @see [`createComponent`](https://playwright.duplojs.dev/en/v0/api/component) To define the component shape consumed by the interaction.
 * 
 */
export declare function createComponentInteraction<GenericStepEmbeddedFunction extends StepEmbeddedFunction>(stepName: string, step: GenericStepEmbeddedFunction): <GenericComponent extends Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, ...args: Parameters<GenericStepEmbeddedFunction> extends [any, ...infer InferredRest] ? InferredRest : never) => Promise<any>;
export type WrapperStepEmbeddedFunction = Record<string, ReturnType<typeof createComponentInteraction>>;
/**
 * Create a step wrapper that groups existing component interactions under a custom Playwright step.
 * 
 * `createStepWrapper(interactions)` returns a function that accepts a step label, then exposes the same interaction methods while wrapping each call in `test.step(stepName, ...)`.
 * 
 * Use it when several low-level interactions should appear as one higher-level action in the Playwright report.
 * 
 * - `interactions` is an object whose values are functions previously created with `createComponentInteraction`.
 * - the returned function is used with the signature `wrapper(stepName).method(...args)`.
 * 
 * ```ts
 * const withSearchStep = createStepWrapper({
 * 	clickOn: Actions.click,
 * 	fillInput: Actions.fill,
 * });
 * 
 * const searchForm = createComponent(
 * 	"searchForm",
 * 	{
 * 		getMainElement({ body }) {
 * 			return body.locator("[data-search-form]");
 * 		},
 * 		getElements({ mainElement }) {
 * 			return {
 * 				query: mainElement.locator("input"),
 * 				submit: mainElement.locator("button[type='submit']"),
 * 			};
 * 		},
 * 	},
 * );
 * 
 * const component = searchForm(website);
 * 
 * await withSearchStep("search form: submit a query").fillInput(component, "query", "duplojs");
 * await withSearchStep("search form: submit a query").clickOn(component, "submit");
 * ```
 * 
 * @remarks
 * 
 * `createStepWrapper` does not change the interaction behavior itself. It only adds an outer Playwright step around the selected interaction call.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper
 * @see [`createComponentInteraction`](https://playwright.duplojs.dev/en/v0/api/componentInteraction) For the interaction functions wrapped by this helper.
 * 
 */
export declare function createStepWrapper<GenericWrapperStepEmbeddedFunction extends WrapperStepEmbeddedFunction>(wrapperStepEmbeddedFunction: GenericWrapperStepEmbeddedFunction): (stepName: string) => GenericWrapperStepEmbeddedFunction;
export {};
