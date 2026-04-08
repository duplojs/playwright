import { type BrowserContext as PlaywrightBrowserContext, type Page as PlaywrightPage } from "playwright/test";
import type { createComponent } from "./component";
import type { PageEngine } from "./page";
import { type Kind, type MaybePromise } from "@duplojs/utils";
declare const webSiteKind: import("@duplojs/utils").KindHandler<import("@duplojs/utils").KindDefinition<"@DuplojsPlaywright/web-site", unknown>>;
type PageOf<GenericPageEngine extends PageEngine<any, any, any, any, any>> = ReturnType<GenericPageEngine>;
type PageArgs<GenericPageEngine extends PageEngine<any, any, any, any, any>> = Parameters<PageOf<GenericPageEngine>["makePath"]>;
export interface Website extends Kind<typeof webSiteKind.definition> {
    playwrightPage: PlaywrightPage;
    iNavigateTo<GenericPageEngine extends PageEngine<any, any, any, any, any>>(pageEngine: GenericPageEngine, ...args: PageArgs<GenericPageEngine>): Promise<PageOf<GenericPageEngine>>;
    iGoTo<GenericPageEngine extends PageEngine<any, any, any, any, any>>(pageEngine: GenericPageEngine, ...args: PageArgs<GenericPageEngine>): Promise<PageOf<GenericPageEngine>>;
    iWantToBeOnPage<GenericPageEngine extends PageEngine<any, any, any, any, any>>(pageEngine: GenericPageEngine): Promise<PageOf<GenericPageEngine>>;
    iWantToSee<GenericComponentEngine extends ReturnType<typeof createComponent>>(componentEngine: GenericComponentEngine): Promise<ReturnType<GenericComponentEngine>>;
    iWantToExist<GenericComponentEngine extends ReturnType<typeof createComponent>>(componentEngine: GenericComponentEngine): Promise<ReturnType<GenericComponentEngine>>;
    iExpectTitleIs(title: string | RegExp): Promise<void>;
    iExpectUrlIs(url: string | RegExp): Promise<void>;
    addCookies(...args: Parameters<PlaywrightBrowserContext["addCookies"]>): Promise<void>;
    refresh(): Promise<void>;
    setPrefix(prefix?: string): void;
    waitForHydration(): Promise<void>;
}
export interface WebsiteHooks {
    beforeNavigateOnPage?(): MaybePromise<void>;
    afterNavigateOnPage?(): MaybePromise<void>;
}
export interface EnvConfig {
    baseUrl?: string;
    prefix?: string;
}
export interface CreateWebsiteParams {
    playwrightPage: PlaywrightPage;
    playwrightBrowserContext: PlaywrightBrowserContext;
    envConfig: EnvConfig;
    hooks?: WebsiteHooks;
}
/**
 * Create the website context used to navigate pages, inspect components, and access shared browser helpers.
 * 
 * `createWebsite(params)` binds a Playwright `Page`, a `BrowserContext`, environment configuration, and optional hooks into one reusable test object.
 * 
 * Use it as the main entry point of an integration-style test flow.
 * 
 * - `params.playwrightPage` is the active Playwright page used for navigation and expectations.
 * - `params.playwrightBrowserContext` is the browser context used for helpers such as cookie injection.
 * - `params.envConfig.baseUrl` is optional and prefixes generated page paths with a full base URL.
 * - `params.envConfig.prefix` is optional and prepends a route prefix before navigation.
 * - `params.hooks` is optional and can run logic before or after page navigation.
 * 
 * The returned website object exposes navigation helpers, page/component assertions, browser helpers, and prefix-aware URL building.
 * 
 * ```ts
 * const website = createWebsite({
 * 	playwrightPage,
 * 	playwrightBrowserContext,
 * 	envConfig: {
 * 		baseUrl: "https://example.com",
 * 		prefix: "admin",
 * 	},
 * });
 * 
 * const dashboard = await website.iNavigateTo(dashboardPage);
 * 
 * await website.iExpectUrlIs("https://example.com/admin/dashboard");
 * await website.iWantToBeOnPage(dashboardPage);
 * await dashboard.mainElement.isVisible();
 * ```
 * 
 * @remarks
 * 
 * When `baseUrl` is defined, the website resolves page paths through `new URL(...)`. Without it, navigation uses the prefixed path directly.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/website
 * @see [`createPage`](https://playwright.duplojs.dev/en/v0/api/page) For the page factories consumed by website navigation methods.
 * @see [`createComponent`](https://playwright.duplojs.dev/en/v0/api/component) For component factories consumed by website visibility helpers.
 * 
 */
export declare function createWebsite(params: CreateWebsiteParams): Website;
export {};
