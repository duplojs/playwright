import { type Locator as PlaywrightLocator } from "playwright/test";
/**
 * Group reusable user interactions built on top of component elements.
 * 
 * `Actions` exposes ready-to-use interaction helpers such as click, fill, type, check, or drag-and-drop. They are meant to be called with a component instance and one of its declared element keys.
 * 
 * Use this namespace when you want explicit, reusable user actions instead of calling Playwright locators directly in every test.
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
 * 				query: mainElement.locator("input"),
 * 				submit: mainElement.locator("button[type='submit']"),
 * 			};
 * 		},
 * 	},
 * );
 * 
 * const form = searchForm(website);
 * 
 * await Actions.fill(form, "query", "duplojs");
 * await Actions.click(form, "submit");
 * ```
 * 
 * @remarks
 * 
 * Most actions first rely on `Assertions.toBeVisible(...)` before performing the underlying Playwright operation.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/actions
 * @see [`Assertions`](https://playwright.duplojs.dev/en/v0/api/assertions) For the matching expectation helpers often used before or after actions.
 * @namespace Actions
 * 
 */
export declare namespace Actions {
    /**
     * Click a declared component element.
     * 
     * `Actions.click(component, elementKey)` checks that the target element is visible, then calls Playwright `click()` on it.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			submit: mainElement.locator("button[type='submit']"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.click(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#click
     * @see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used internally before clicking.
     * @namespace Actions
     * 
     */
    const click: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Force a click on a declared component element.
     * 
     * `Actions.forceClick(component, elementKey)` calls Playwright `click({ force: true })` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			submit: mainElement.locator("button[type='submit']"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.forceClick(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#forceClick
     * @see [`Actions.click`](https://playwright.duplojs.dev/en/v0/api/actions#click) For the standard visible click flow.
     * @namespace Actions
     * 
     */
    const forceClick: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Hover a declared component element.
     * 
     * `Actions.hover(component, elementKey)` checks visibility, then calls Playwright `hover()` on the target element.
     * 
     * ```ts
     * const menu = createComponent("menu", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-menu]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			trigger: mainElement.locator("[data-trigger]"),
     * 		};
     * 	},
     * });
     * 
     * const component = menu(website);
     * 
     * await Actions.hover(component, "trigger");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#hover
     * @see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used internally before hovering.
     * @namespace Actions
     * 
     */
    const hover: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Focus a declared component element.
     * 
     * `Actions.focus(component, elementKey)` checks visibility, then calls Playwright `focus()` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			query: mainElement.locator("input"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.focus(component, "query");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#focus
     * @see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used internally before focusing.
     * @namespace Actions
     * 
     */
    const focus: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Fill a declared component element with text.
     * 
     * `Actions.fill(component, elementKey, content)` checks visibility, then calls Playwright `fill(content)` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			query: mainElement.locator("input"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.fill(component, "query", "duplojs");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#fill
     * @see [`Actions.type`](https://playwright.duplojs.dev/en/v0/api/actions#type) For sequential typing instead of direct fill.
     * @namespace Actions
     * 
     */
    const fill: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, content: string) => Promise<any>;
    /**
     * Type text sequentially into a declared component element.
     * 
     * `Actions.type(component, elementKey, text, options?)` checks visibility, then calls Playwright `pressSequentially(...)` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			query: mainElement.locator("input"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.type(component, "query", "duplojs");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#type
     * @see [`Actions.fill`](https://playwright.duplojs.dev/en/v0/api/actions#fill) For direct value replacement instead of sequential typing.
     * @namespace Actions
     * 
     */
    const type: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, text: string, options?: {
        delay?: number;
        noWaitAfter?: boolean;
        timeout?: number;
    } | undefined) => Promise<any>;
    /**
     * Clear the value of a declared component element.
     * 
     * `Actions.clear(component, elementKey)` checks visibility, then calls Playwright `clear()` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			query: mainElement.locator("input"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.clear(component, "query");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#clear
     * @see [`Actions.fill`](https://playwright.duplojs.dev/en/v0/api/actions#fill) Often used after clearing an input.
     * @namespace Actions
     * 
     */
    const clear: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Press a keyboard key on a declared component element.
     * 
     * `Actions.press(component, elementKey, key)` checks visibility, then calls Playwright `press(key)` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			query: mainElement.locator("input"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.press(component, "query", "Enter");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#press
     * @see [`Actions.focus`](https://playwright.duplojs.dev/en/v0/api/actions#focus) Useful before sending keyboard input in some flows.
     * @namespace Actions
     * 
     */
    const press: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, key: string) => Promise<any>;
    /**
     * Check a declared component element.
     * 
     * `Actions.check(component, elementKey)` checks visibility, then calls Playwright `check()` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			remember: mainElement.locator("input[type='checkbox']"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.check(component, "remember");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#check
     * @see [`Actions.uncheck`](https://playwright.duplojs.dev/en/v0/api/actions#uncheck) For the opposite state change.
     * @namespace Actions
     * 
     */
    const check: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Uncheck a declared component element.
     * 
     * `Actions.uncheck(component, elementKey)` checks visibility, then calls Playwright `uncheck()` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			remember: mainElement.locator("input[type='checkbox']"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.uncheck(component, "remember");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#uncheck
     * @see [`Actions.check`](https://playwright.duplojs.dev/en/v0/api/actions#check) For the opposite state change.
     * @namespace Actions
     * 
     */
    const uncheck: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Select one or more options on a declared component element.
     * 
     * `Actions.selectOption(component, elementKey, values)` checks visibility, then calls Playwright `selectOption(values)` on the target element.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			role: mainElement.locator("select"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.selectOption(component, "role", "admin");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#selectOption
     * @see [`Actions.fill`](https://playwright.duplojs.dev/en/v0/api/actions#fill) For text inputs instead of select fields.
     * @namespace Actions
     * 
     */
    const selectOption: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, values: string | import("playwright-core").ElementHandle<Node> | readonly string[] | {
        value?: string;
        label?: string;
        index?: number;
    } | readonly import("playwright-core").ElementHandle<Node>[] | readonly {
        value?: string;
        label?: string;
        index?: number;
    }[] | null) => Promise<any>;
    /**
     * Drag a declared component element to a target locator.
     * 
     * `Actions.dragTo(component, elementKey, target, options?)` checks visibility on both ends, then calls Playwright `dragTo(...)`.
     * 
     * ```ts
     * const board = createComponent("board", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-board]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			card: mainElement.locator("[data-card]"),
     * 			column: mainElement.locator("[data-column]"),
     * 		};
     * 	},
     * });
     * 
     * const component = board(website);
     * 
     * await Actions.dragTo(component, "card", component.elements.column);
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#dragTo
     * @see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) Used on the source element before dragging.
     * @namespace Actions
     * 
     */
    const dragTo: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, target: PlaywrightLocator, options?: {
        force?: boolean;
        noWaitAfter?: boolean;
        sourcePosition?: {
            x: number;
            y: number;
        };
        steps?: number;
        targetPosition?: {
            x: number;
            y: number;
        };
        timeout?: number;
        trial?: boolean;
    } | undefined) => Promise<any>;
    /**
     * Extract the text content of a declared component element.
     * 
     * `Actions.extractContent(component, elementKey)` checks visibility, then returns Playwright `textContent()` for the target element.
     * 
     * ```ts
     * const panel = createComponent("panel", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-panel]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			title: mainElement.locator("h2"),
     * 		};
     * 	},
     * });
     * 
     * const component = panel(website);
     * 
     * const title = await Actions.extractContent(component, "title");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#extractContent
     * @see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For asserting text instead of reading it.
     * @namespace Actions
     * 
     */
    const extractContent: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Wrap `Actions` helpers under a custom Playwright step.
     * 
     * `Actions.withStep(stepName)` returns the same action helpers while grouping each call under an outer `test.step(stepName, ...)`.
     * 
     * ```ts
     * const form = createComponent("form", {
     * 	getMainElement({ body }) {
     * 		return body.locator("form");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			query: mainElement.locator("input"),
     * 			submit: mainElement.locator("button[type='submit']"),
     * 		};
     * 	},
     * });
     * 
     * const component = form(website);
     * 
     * await Actions.withStep("search form: submit a query").fill(component, "query", "duplojs");
     * await Actions.withStep("search form: submit a query").click(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/actions#withStep
     * @see [`createStepWrapper`](https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper) Used internally to build the wrapper.
     * @namespace Actions
     * 
     */
    const withStep: (stepName: string) => {
        click: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        forceClick: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        hover: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        focus: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        fill: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, content: string) => Promise<any>;
        type: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, text: string, options?: {
            delay?: number;
            noWaitAfter?: boolean;
            timeout?: number;
        } | undefined) => Promise<any>;
        clear: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        press: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, key: string) => Promise<any>;
        check: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        uncheck: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        selectOption: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, values: string | import("playwright-core").ElementHandle<Node> | readonly string[] | {
            value?: string;
            label?: string;
            index?: number;
        } | readonly import("playwright-core").ElementHandle<Node>[] | readonly {
            value?: string;
            label?: string;
            index?: number;
        }[] | null) => Promise<any>;
        dragTo: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, target: PlaywrightLocator, options?: {
            force?: boolean;
            noWaitAfter?: boolean;
            sourcePosition?: {
                x: number;
                y: number;
            };
            steps?: number;
            targetPosition?: {
                x: number;
                y: number;
            };
            timeout?: number;
            trial?: boolean;
        } | undefined) => Promise<any>;
        extractContent: <GenericComponent extends import("./component").Component<string, Record<string, PlaywrightLocator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    };
}
