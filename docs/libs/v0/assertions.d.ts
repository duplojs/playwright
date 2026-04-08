/**
 * Group reusable expectations built on top of component elements.
 * 
 * `Assertions` exposes ready-to-use assertion helpers such as visibility, text, state, attributes, values, or quantity checks. They are meant to be called with a component instance and one of its declared element keys.
 * 
 * Use this namespace when you want readable, reusable assertions instead of repeating Playwright expectations directly in every test.
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
 * await Assertions.toHaveValue(form, "query", "duplojs");
 * await Assertions.toBeVisible(form, "submit");
 * ```
 * 
 * @remarks
 * 
 * Many assertions first ensure the target element is visible, then run the underlying Playwright expectation.
 * 
 * @see https://playwright.duplojs.dev/en/v0/api/assertions
 * @see [`Actions`](https://playwright.duplojs.dev/en/v0/api/actions) For the matching interaction helpers commonly used before assertions.
 * @namespace Assertions
 * 
 */
export declare namespace Assertions {
    /**
     * Assert that a declared component element is visible.
     * 
     * `Assertions.toBeVisible(component, elementKey)` scrolls the target into view if needed, then checks Playwright `toBeVisible()`.
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
     * await Assertions.toBeVisible(component, "title");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible
     * @see [`Actions.click`](https://playwright.duplojs.dev/en/v0/api/actions#click) Uses this assertion internally before clicking.
     * @namespace Assertions
     * 
     */
    const toBeVisible: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert that a declared component element has the expected text.
     * 
     * `Assertions.toHaveText(component, elementKey, text)` first ensures visibility, then checks Playwright `toHaveText(text)`.
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
     * await Assertions.toHaveText(component, "title", "Dashboard");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText
     * @see [`Assertions.toContainText`](https://playwright.duplojs.dev/en/v0/api/assertions#toContainText) For partial text matching.
     * @namespace Assertions
     * 
     */
    const toHaveText: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, text: string | RegExp) => Promise<any>;
    /**
     * Assert that a declared component element contains the expected text.
     * 
     * `Assertions.toContainText(component, elementKey, text)` first ensures visibility, then checks Playwright `toContainText(text)`.
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
     * await Assertions.toContainText(component, "title", "Dash");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toContainText
     * @see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For exact text matching.
     * @namespace Assertions
     * 
     */
    const toContainText: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, text: string | RegExp) => Promise<any>;
    /**
     * Assert that a declared component element has no text.
     * 
     * `Assertions.toHaveNoText(component, elementKey)` first ensures visibility, then checks Playwright `toHaveText("")`.
     * 
     * ```ts
     * const panel = createComponent("panel", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-panel]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			message: mainElement.locator("p"),
     * 		};
     * 	},
     * });
     * 
     * const component = panel(website);
     * 
     * await Assertions.toHaveNoText(component, "message");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveNoText
     * @see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For explicit text assertions.
     * @namespace Assertions
     * 
     */
    const toHaveNoText: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert that a declared component element is hidden.
     * 
     * `Assertions.toBeHidden(component, elementKey)` calls Playwright `toBeHidden()` on the target element.
     * 
     * ```ts
     * const panel = createComponent("panel", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-panel]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			loader: mainElement.locator("[data-loader]"),
     * 		};
     * 	},
     * });
     * 
     * const component = panel(website);
     * 
     * await Assertions.toBeHidden(component, "loader");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeHidden
     * @see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) For the visible case.
     * @namespace Assertions
     * 
     */
    const toBeHidden: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert the number of matched elements for a declared component entry.
     * 
     * `Assertions.toHaveQuantity(component, elementKey, { quantity, operator? })` polls `element.count()` and compares it with the expected value.
     * 
     * ```ts
     * const list = createComponent("list", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-list]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			items: mainElement.locator("li"),
     * 		};
     * 	},
     * });
     * 
     * const component = list(website);
     * 
     * await Assertions.toHaveQuantity(component, "items", {
     * 	quantity: 3,
     * 	operator: "gte",
     * });
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveQuantity
     * @see [`Assertions.toBeVisible`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeVisible) For single-element visibility checks.
     * @namespace Assertions
     * 
     */
    const toHaveQuantity: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, args_0: {
        quantity: number;
        operator?: "lte" | "gte" | "e";
    }) => Promise<any>;
    /**
     * Assert that a declared component element is enabled.
     * 
     * `Assertions.toBeEnabled(component, elementKey)` first ensures visibility, then checks Playwright `toBeEnabled()`.
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
     * await Assertions.toBeEnabled(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeEnabled
     * @see [`Assertions.toBeDisabled`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeDisabled) For the opposite state.
     * @namespace Assertions
     * 
     */
    const toBeEnabled: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert that a declared component element is checked.
     * 
     * `Assertions.toBeChecked(component, elementKey)` first ensures visibility, then checks Playwright `toBeChecked()`.
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
     * await Assertions.toBeChecked(component, "remember");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeChecked
     * @see [`Assertions.toBeDisabled`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeDisabled) For other element states.
     * @namespace Assertions
     * 
     */
    const toBeChecked: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert that a declared component element is disabled.
     * 
     * `Assertions.toBeDisabled(component, elementKey)` first ensures visibility, then checks Playwright `toBeDisabled()`.
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
     * await Assertions.toBeDisabled(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeDisabled
     * @see [`Assertions.toBeEnabled`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeEnabled) For the opposite state.
     * @namespace Assertions
     * 
     */
    const toBeDisabled: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert that a declared component element has an attribute.
     * 
     * `Assertions.toHaveAttribute(component, elementKey, name, value?)` first ensures visibility, then checks Playwright `toHaveAttribute(...)`.
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
     * await Assertions.toHaveAttribute(component, "title", "data-state", "ready");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveAttribute
     * @see [`Assertions.toHaveClass`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveClass) For class-specific assertions.
     * @namespace Assertions
     * 
     */
    const toHaveAttribute: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, name: string, value?: string | RegExp | undefined) => Promise<any>;
    /**
     * Assert that a declared component element has the expected class value.
     * 
     * `Assertions.toHaveClass(component, elementKey, value)` first ensures visibility, then checks Playwright `toHaveClass(value)`.
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
     * await Assertions.toHaveClass(component, "title", /active/);
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveClass
     * @see [`Assertions.toHaveAttribute`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveAttribute) For generic attribute assertions.
     * @namespace Assertions
     * 
     */
    const toHaveClass: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, value: string | RegExp) => Promise<any>;
    /**
     * Assert that a declared component element has the expected value.
     * 
     * `Assertions.toHaveValue(component, elementKey, value)` first ensures visibility, then checks Playwright `toHaveValue(value)`.
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
     * await Assertions.toHaveValue(component, "query", "duplojs");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toHaveValue
     * @see [`Assertions.toHaveText`](https://playwright.duplojs.dev/en/v0/api/assertions#toHaveText) For text content instead of form values.
     * @namespace Assertions
     * 
     */
    const toHaveValue: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, value: string | RegExp) => Promise<any>;
    /**
     * Assert that a declared component element is busy.
     * 
     * `Assertions.toBeBusy(component, elementKey)` first ensures visibility, then checks `aria-busy="true"` on the target element.
     * 
     * ```ts
     * const panel = createComponent("panel", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-panel]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			submit: mainElement.locator("button"),
     * 		};
     * 	},
     * });
     * 
     * const component = panel(website);
     * 
     * await Assertions.toBeBusy(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeBusy
     * @see [`Assertions.toBeNotBusy`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeNotBusy) For the opposite busy state.
     * @namespace Assertions
     * 
     */
    const toBeBusy: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Assert that a declared component element is not busy.
     * 
     * `Assertions.toBeNotBusy(component, elementKey)` first ensures visibility, then checks `aria-busy="false"` on the target element.
     * 
     * ```ts
     * const panel = createComponent("panel", {
     * 	getMainElement({ body }) {
     * 		return body.locator("[data-panel]");
     * 	},
     * 	getElements({ mainElement }) {
     * 		return {
     * 			submit: mainElement.locator("button"),
     * 		};
     * 	},
     * });
     * 
     * const component = panel(website);
     * 
     * await Assertions.toBeNotBusy(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#toBeNotBusy
     * @see [`Assertions.toBeBusy`](https://playwright.duplojs.dev/en/v0/api/assertions#toBeBusy) For the opposite busy state.
     * @namespace Assertions
     * 
     */
    const toBeNotBusy: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    /**
     * Wrap `Assertions` helpers under a custom Playwright step.
     * 
     * `Assertions.withStep(stepName)` returns the same assertion helpers while grouping each call under an outer `test.step(stepName, ...)`.
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
     * await Assertions.withStep("search form: validate state").toHaveValue(component, "query", "duplojs");
     * await Assertions.withStep("search form: validate state").toBeVisible(component, "submit");
     * ```
     * 
     * @see https://playwright.duplojs.dev/en/v0/api/assertions#withStep
     * @see [`createStepWrapper`](https://playwright.duplojs.dev/en/v0/api/componentInteraction#createStepWrapper) Used internally to build the wrapper.
     * @namespace Assertions
     * 
     */
    const withStep: (stepName: string) => {
        toBeVisible: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toHaveText: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, text: string | RegExp) => Promise<any>;
        toContainText: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, text: string | RegExp) => Promise<any>;
        toHaveNoText: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toBeHidden: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toHaveQuantity: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, args_0: {
            quantity: number;
            operator?: "lte" | "gte" | "e";
        }) => Promise<any>;
        toBeEnabled: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toBeChecked: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toBeDisabled: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toHaveAttribute: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, name: string, value?: string | RegExp | undefined) => Promise<any>;
        toHaveClass: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, value: string | RegExp) => Promise<any>;
        toHaveValue: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey, value: string | RegExp) => Promise<any>;
        toBeBusy: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
        toBeNotBusy: <GenericComponent extends import("./component").Component<string, Record<string, import("playwright-core").Locator>, any, any>, GenericElementKey extends Extract<keyof GenericComponent["elements"], string>>(component: GenericComponent, elementKey: GenericElementKey) => Promise<any>;
    };
}
