import { createComponentInteraction, createStepWrapper } from "./componentInteraction";
import { Assertions } from "./assertions";
import { expect, type Locator as PlaywrightLocator } from "playwright/test";

/**
 * {@include actions/index.md}
 */
export namespace Actions {

	/**
	 * {@include actions/click/index.md}
	 */
	export const click = createComponentInteraction(
		"$component: I click on $element.",
		async({ element, elementKey, component }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.click();
		},
	);

	/**
	 * {@include actions/forceClick/index.md}
	 */
	export const forceClick = createComponentInteraction(
		"$component: I force click on $element.",
		({ element }) => element.click({ force: true }),
	);

	/**
	 * {@include actions/hover/index.md}
	 */
	export const hover = createComponentInteraction(
		"$component: I hover $element.",
		async({ element, elementKey, component }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.hover();
		},
	);

	/**
	 * {@include actions/focus/index.md}
	 */
	export const focus = createComponentInteraction(
		"$component: I focus $element.",
		async({ element, elementKey, component }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.focus();
		},
	);

	/**
	 * {@include actions/fill/index.md}
	 */
	export const fill = createComponentInteraction(
		"$component: I fill on $element.",
		async({ element, elementKey, component }, content: string) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.fill(content);
		},
	);

	/**
	 * {@include actions/type/index.md}
	 */
	export const type = createComponentInteraction(
		"$component: I type on $element.",
		async(
			{ element, elementKey, component },
			text: string,
			options?: Parameters<PlaywrightLocator["pressSequentially"]>[1],
		) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.pressSequentially(text, options);
		},
	);

	/**
	 * {@include actions/clear/index.md}
	 */
	export const clear = createComponentInteraction(
		"$component: I clear $element.",
		async({ element, elementKey, component }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.clear();
		},
	);

	/**
	 * {@include actions/press/index.md}
	 */
	export const press = createComponentInteraction(
		"$component: I press on $element.",
		async({ element, elementKey, component }, key: string) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.press(key);
		},
	);

	/**
	 * {@include actions/check/index.md}
	 */
	export const check = createComponentInteraction(
		"$component: I check $element.",
		async({ element, elementKey, component }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.check();
		},
	);

	/**
	 * {@include actions/uncheck/index.md}
	 */
	export const uncheck = createComponentInteraction(
		"$component: I uncheck $element.",
		async({ element, elementKey, component }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.uncheck();
		},
	);

	/**
	 * {@include actions/selectOption/index.md}
	 */
	export const selectOption = createComponentInteraction(
		"$component: I select option on $element.",
		async(
			{ element, elementKey, component },
			values: Parameters<PlaywrightLocator["selectOption"]>[0],
		) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.selectOption(values);
		},
	);

	/**
	 * {@include actions/dragTo/index.md}
	 */
	export const dragTo = createComponentInteraction(
		"$component: I drag $element to target.",
		async(
			{ element, elementKey, component },
			target: PlaywrightLocator,
			options?: Parameters<PlaywrightLocator["dragTo"]>[1],
		) => {
			await Assertions.toBeVisible(component, elementKey);
			await expect(target).toBeVisible();

			return element.dragTo(target, options);
		},
	);

	/**
	 * {@include actions/extractContent/index.md}
	 */
	export const extractContent = createComponentInteraction(
		"$component: I extract content of $element.",
		async({ element, component, elementKey }) => {
			await Assertions.toBeVisible(component, elementKey);

			return element.textContent();
		},
	);

	/**
	 * {@include actions/withStep/index.md}
	 */
	export const withStep = createStepWrapper({
		click,
		forceClick,
		hover,
		focus,
		fill,
		type,
		clear,
		press,
		check,
		uncheck,
		selectOption,
		dragTo,
		extractContent,
	});
}
