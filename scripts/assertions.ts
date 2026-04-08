import { createStepWrapper, createComponentInteraction } from "./componentInteraction";
import { expect } from "playwright/test";

/**
 * {@include assertions/index.md}
 */
export namespace Assertions {

	/**
	 * {@include assertions/toBeVisible/index.md}
	 */
	export const toBeVisible = createComponentInteraction(
		"$component: I want $element is visible.",
		async({ element }) => {
			await element.scrollIntoViewIfNeeded();

			await expect(element).toBeVisible();
		},
	);

	/**
	 * {@include assertions/toHaveText/index.md}
	 */
	export const toHaveText = createComponentInteraction(
		"$component: I want $element have Text.",
		async({ element, component, elementKey }, text: string | RegExp) => {
			await toBeVisible(component, elementKey);

			return expect(element).toHaveText(text);
		},
	);

	/**
	 * {@include assertions/toContainText/index.md}
	 */
	export const toContainText = createComponentInteraction(
		"$component: I want $element contain Text.",
		async({ element, component, elementKey }, text: string | RegExp) => {
			await toBeVisible(component, elementKey);

			return expect(element).toContainText(text);
		},
	);

	/**
	 * {@include assertions/toHaveNoText/index.md}
	 */
	export const toHaveNoText = createComponentInteraction(
		"$component: I want $element have no Text.",
		async({ element, component, elementKey }) => {
			await toBeVisible(component, elementKey);

			return expect(element).toHaveText("");
		},
	);

	/**
	 * {@include assertions/toBeHidden/index.md}
	 */
	export const toBeHidden = createComponentInteraction(
		"$component: I want $element is hidden.",
		async({ element }) => expect(element).toBeHidden(),
	);

	/**
	 * {@include assertions/toHaveQuantity/index.md}
	 */
	export const toHaveQuantity = createComponentInteraction(
		"$component: I check quantity of $element.",
		async({ element }, { quantity, operator }: {
			quantity: number;
			operator?: "lte" | "gte" | "e";
		}) => {
			if (operator === "gte") {
				return expect.poll(() => element.count(), { timeout: 5000 }).toBeGreaterThanOrEqual(quantity);
			} else if (operator === "lte") {
				return expect.poll(() => element.count(), { timeout: 5000 }).toBeLessThanOrEqual(quantity);
			} else {
				return expect.poll(() => element.count(), { timeout: 5000 }).toBe(quantity);
			}
		},
	);

	/**
	 * {@include assertions/toBeEnabled/index.md}
	 */
	export const toBeEnabled = createComponentInteraction(
		"$component: I want $element is enabled.",
		async({ element, component, elementKey }) => {
			await toBeVisible(component, elementKey);

			return expect(element).toBeEnabled();
		},
	);

	/**
	 * {@include assertions/toBeChecked/index.md}
	 */
	export const toBeChecked = createComponentInteraction(
		"$component: I want $element is checked.",
		async({ element, component, elementKey }) => {
			await toBeVisible(component, elementKey);

			return expect(element).toBeChecked();
		},
	);

	/**
	 * {@include assertions/toBeDisabled/index.md}
	 */
	export const toBeDisabled = createComponentInteraction(
		"$component: I want $element is disabled.",
		async({ element, component, elementKey }) => {
			await toBeVisible(component, elementKey);

			return expect(element).toBeDisabled();
		},
	);

	/**
	 * {@include assertions/toHaveAttribute/index.md}
	 */
	export const toHaveAttribute = createComponentInteraction(
		"$component: I want $element have attribute.",
		async({ element, component, elementKey }, name: string, value?: string | RegExp) => {
			await toBeVisible(component, elementKey);

			if (value === undefined) {
				return expect(element).toHaveAttribute(name, /.+/);
			}

			return expect(element).toHaveAttribute(name, value);
		},
	);

	/**
	 * {@include assertions/toHaveClass/index.md}
	 */
	export const toHaveClass = createComponentInteraction(
		"$component: I want $element have class.",
		async({ element, component, elementKey }, value: string | RegExp) => {
			await toBeVisible(component, elementKey);

			return expect(element).toHaveClass(value);
		},
	);

	/**
	 * {@include assertions/toHaveValue/index.md}
	 */
	export const toHaveValue = createComponentInteraction(
		"$component: I want $element have value.",
		async({ element, component, elementKey }, value: string | RegExp) => {
			await toBeVisible(component, elementKey);

			return expect(element).toHaveValue(value);
		},
	);

	/**
	 * {@include assertions/toBeBusy/index.md}
	 */
	export const toBeBusy = createComponentInteraction(
		"$component: I want $element is busy.",
		async({ element, component, elementKey }) => {
			await toBeVisible(component, elementKey);

			return expect(element).toHaveAttribute("aria-busy", "true");
		},
	);

	/**
	 * {@include assertions/toBeNotBusy/index.md}
	 */
	export const toBeNotBusy = createComponentInteraction(
		"$component: I want $element is not busy.",
		async({ element, component, elementKey }) => {
			await toBeVisible(component, elementKey);

			return expect(element).toHaveAttribute("aria-busy", "false");
		},
	);

	/**
	 * {@include assertions/withStep/index.md}
	 */
	export const withStep = createStepWrapper({
		toBeVisible,
		toHaveText,
		toContainText,
		toHaveNoText,
		toBeHidden,
		toHaveQuantity,
		toBeEnabled,
		toBeChecked,
		toBeDisabled,
		toHaveAttribute,
		toHaveClass,
		toHaveValue,
		toBeBusy,
		toBeNotBusy,
	});
}
