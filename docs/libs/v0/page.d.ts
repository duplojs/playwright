import type { Locator as PlaywrightLocator } from "playwright/test";
import type { Kind } from "@duplojs/utils";
import { type ComponentEngine, type ComponentMethods, type GetComponentMethodsParams, type GetComponentElementsParams, type GetComponentMainElementParams, type ComponentElements, type Component } from "./component";
import type { Website } from "./website";
declare const pageKind: import("@duplojs/utils").KindHandler<import("@duplojs/utils").KindDefinition<"@DuplojsPlaywright/page", unknown>>;
export interface PageEngine<GenericName extends string = string, GenericPathParams extends Record<string, unknown> = Record<string, unknown>, GenericElements extends ComponentElements | undefined = undefined, GenericMethods extends ComponentMethods | undefined = undefined, GenericComponent extends ComponentEngine = never> {
    (website: Website): Page<GenericName, GenericPathParams, GenericElements, GenericMethods, GenericComponent>;
    componentName: GenericName;
}
type InferPagePathParams<GenericMakePath extends (...args: any[]) => string> = Parameters<GenericMakePath> extends [] ? Record<string, unknown> : Parameters<GenericMakePath>[0] extends Record<string, unknown> ? Parameters<GenericMakePath>[0] : never;
type _Page<GenericName extends string, GenericElement extends ComponentElements | undefined, GenericMethods extends ComponentMethods | undefined, GenericComponent extends ComponentEngine> = (Component<GenericName, GenericElement, GenericMethods, GenericComponent> & Kind<typeof pageKind.definition, GenericName>);
export interface Page<GenericName extends string = string, GenericPathParams extends Record<string, unknown> = Record<string, unknown>, GenericElement extends ComponentElements | undefined = ComponentElements | undefined, GenericMethods extends ComponentMethods | undefined = undefined, GenericComponent extends ComponentEngine = never> extends _Page<GenericName, GenericElement, GenericMethods, GenericComponent> {
    makePath(...args: {} extends GenericPathParams ? [params?: GenericPathParams] : [params: GenericPathParams]): string;
}
/**
 * Create a typed page factory built on top of the component model.
 * 
 * `createPage(name, params)` defines a page like a component, then adds a typed `makePath` function used by the website layer for navigation.
 * 
 * Use it when a screen needs both component-like accessors and a stable path-building contract.
 * 
 * - `name` is the page name in the test model.
 * - `params.makePath` builds the route or URL path for the page.
 * - `params.getMainElement`, `params.getElements`, `params.getMethods`, and `params.components` follow the same role as in `createComponent`.
 * 
 * The returned value is a page factory. Called with a `Website`, it produces a typed page instance exposing component features plus `makePath(...)`.
 * 
 * ```ts
 * const articlePage = createPage(
 * 	"article",
 * 	{
 * 		makePath({ slug }: { slug: string }) {
 * 			return `/articles/${slug}`;
 * 		},
 * 		getMainElement({ body }) {
 * 			return body.locator("main");
 * 		},
 * 		getElements({ mainElement }) {
 * 			return {
 * 				title: mainElement.locator("h1"),
 * 			};
 * 		},
 * 		components: [toolbar],
 * 	},
 * );
 * 
 * const article = articlePage(website);
 * const path = article.makePath({ slug: "typed-pages" });
 * ```
 * 
 * @remarks
 * 
 * `createPage` reuses `createComponent` internally, so page instances follow the same element, method, and nested-component model as regular components.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/page
 * @see [`createComponent`](https://playwright.duplojs.dev/en/v0/api/component) For the shared component model used by pages.
 * @see [`createWebsite`](https://playwright.duplojs.dev/en/v0/api/website) For navigation and page instantiation from a Playwright context.
 * 
 */
export declare function createPage<GenericName extends string, GenericMakePath extends (...args: any[]) => string, GenericElements extends ComponentElements | undefined = undefined, GenericMethods extends ComponentMethods | undefined = undefined, GenericComponent extends ComponentEngine = never>(name: GenericName, params: {
    makePath: GenericMakePath;
    getMainElement(params: GetComponentMainElementParams): PlaywrightLocator;
    getElements?(params: GetComponentElementsParams): GenericElements;
    getMethods?(params: GetComponentMethodsParams<GenericElements>): GenericMethods;
    components?: GenericComponent[];
}): PageEngine<GenericName, InferPagePathParams<GenericMakePath>, GenericElements, GenericMethods, GenericComponent>;
export {};
