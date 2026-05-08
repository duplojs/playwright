import { type Locator as PlaywrightLocator } from "playwright/test";
import type { Website } from "./website";
import type { Kind } from "@duplojs/utils";
export type ComponentElements = Record<string, PlaywrightLocator>;
export type ComponentMethods = Record<string, (...args: any[]) => any>;
export interface ComponentEngine {
    (website: Website): Component<any, any, any, any>;
    componentName: string;
}
type FormatComponent<GenericComponent extends ComponentEngine> = {
    [Component in GenericComponent as Component["componentName"]]: Component;
};
declare const componentKind: import("@duplojs/utils").KindHandler<import("@duplojs/utils").KindDefinition<"@DuplojsPlaywright/component", unknown>>;
export interface Component<GenericName extends string = string, GenericElements extends ComponentElements | undefined = ComponentElements | undefined, GenericMethods extends ComponentMethods | undefined = undefined, GenericComponent extends ComponentEngine = never> extends Kind<typeof componentKind.definition, GenericName> {
    name: GenericName;
    get mainElement(): PlaywrightLocator;
    elements: GenericElements;
    methods: GenericMethods;
    iWantToSeeComponent<GenericComponentName extends GenericComponent["componentName"]>(componentName: GenericComponentName): Promise<ReturnType<Extract<GenericComponent, {
        componentName: GenericComponentName;
    }>>>;
    components: FormatComponent<GenericComponent>;
}
export interface GetComponentMainElementParams {
    body: PlaywrightLocator;
}
export interface GetComponentElementsParams {
    mainElement: PlaywrightLocator;
    body: PlaywrightLocator;
}
export interface GetComponentMethodsParams<GenericElements extends ComponentElements | undefined> {
    mainElement: PlaywrightLocator;
    body: PlaywrightLocator;
    elements: GenericElements;
    website: Website;
}
/**
 * Create a typed component factory for reusable Playwright page fragments.
 * 
 * `createComponent` is used to describe a reusable component once, then instantiate it from a website context where needed. It defines how the component is found, which locators it exposes, which helper methods it provides, and which child components it can reach.
 * 
 * The function is used with the signature `createComponent(name, params)`.
 * 
 * - `name` is the public name of the component in the test model.
 * - `params.getMainElement` is required and returns the root locator of the component.
 * - `params.getElements` is optional and can expose named child locators.
 * - `params.getMethods` is optional and can expose reusable helper methods built from the component context.
 * - `params.components` is optional and can register child component factories reachable through `iWantToSeeComponent`.
 * 
 * The returned value is a component factory. Called with a `Website`, it produces a typed component instance exposing its main element, declared elements, wrapped methods, and nested components.
 * 
 * ```ts
 * const searchForm = createComponent(
 * 	"searchForm",
 * 	{
 * 		getMainElement({ body }) {
 * 			return body.locator("[data-search-form]");
 * 		},
 * 		getElements({ mainElement }) {
 * 			return {
 * 				input: mainElement.locator("input"),
 * 				submitButton: mainElement.locator("button[type='submit']"),
 * 			};
 * 		},
 * 		getMethods({ elements }) {
 * 			return {
 * 				async fillSearch(value: string) {
 * 					await elements.input.fill(value);
 * 				},
 * 			};
 * 		},
 * 		components: [alertBanner],
 * 	},
 * );
 * ```
 * 
 * @remarks
 * 
 * `createComponent` does not interact with the browser by itself. It defines how to build a component instance from a `Website`, then wraps declared methods in Playwright steps when the component is instantiated.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/component
 * @see [`createPage`](https://playwright.duplojs.dev/en/v0/api/page) For page-level composition based on the same component model.
 * @see [`createWebsite`](https://playwright.duplojs.dev/en/v0/api/website) For the website context used to instantiate the factory.
 * 
 */
export declare function createComponent<GenericName extends string, GenericElements extends ComponentElements | undefined = undefined, GenericMethods extends ComponentMethods | undefined = undefined, GenericComponent extends ComponentEngine = never>(name: GenericName, params: {
    getMainElement(params: GetComponentMainElementParams): PlaywrightLocator;
    getElements?(params: GetComponentElementsParams): GenericElements;
    getMethods?(params: GetComponentMethodsParams<GenericElements>): GenericMethods;
    components?: GenericComponent[];
}): {
    (website: Website): Component<GenericName, GenericElements, GenericMethods, GenericComponent>;
    componentName: GenericName;
};
export {};
