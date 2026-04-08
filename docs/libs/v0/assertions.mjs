import { createComponentInteraction, createStepWrapper } from './componentInteraction.mjs';
import { expect } from 'playwright/test';

/**
 * {@include assertions/index.md}
 */
var Assertions;
(function (Assertions) {
    /**
     * {@include assertions/toBeVisible/index.md}
     */
    Assertions.toBeVisible = createComponentInteraction("$component: I want $element is visible.", async ({ element }) => {
        await element.scrollIntoViewIfNeeded();
        await expect(element).toBeVisible();
    });
    /**
     * {@include assertions/toHaveText/index.md}
     */
    Assertions.toHaveText = createComponentInteraction("$component: I want $element have Text.", async ({ element, component, elementKey }, text) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toHaveText(text);
    });
    /**
     * {@include assertions/toContainText/index.md}
     */
    Assertions.toContainText = createComponentInteraction("$component: I want $element contain Text.", async ({ element, component, elementKey }, text) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toContainText(text);
    });
    /**
     * {@include assertions/toHaveNoText/index.md}
     */
    Assertions.toHaveNoText = createComponentInteraction("$component: I want $element have no Text.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toHaveText("");
    });
    /**
     * {@include assertions/toBeHidden/index.md}
     */
    Assertions.toBeHidden = createComponentInteraction("$component: I want $element is hidden.", async ({ element }) => expect(element).toBeHidden());
    /**
     * {@include assertions/toHaveQuantity/index.md}
     */
    Assertions.toHaveQuantity = createComponentInteraction("$component: I check quantity of $element.", async ({ element }, { quantity, operator }) => {
        if (operator === "gte") {
            return expect.poll(() => element.count(), { timeout: 5000 }).toBeGreaterThanOrEqual(quantity);
        }
        else if (operator === "lte") {
            return expect.poll(() => element.count(), { timeout: 5000 }).toBeLessThanOrEqual(quantity);
        }
        else {
            return expect.poll(() => element.count(), { timeout: 5000 }).toBe(quantity);
        }
    });
    /**
     * {@include assertions/toBeEnabled/index.md}
     */
    Assertions.toBeEnabled = createComponentInteraction("$component: I want $element is enabled.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toBeEnabled();
    });
    /**
     * {@include assertions/toBeChecked/index.md}
     */
    Assertions.toBeChecked = createComponentInteraction("$component: I want $element is checked.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toBeChecked();
    });
    /**
     * {@include assertions/toBeDisabled/index.md}
     */
    Assertions.toBeDisabled = createComponentInteraction("$component: I want $element is disabled.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toBeDisabled();
    });
    /**
     * {@include assertions/toHaveAttribute/index.md}
     */
    Assertions.toHaveAttribute = createComponentInteraction("$component: I want $element have attribute.", async ({ element, component, elementKey }, name, value) => {
        await Assertions.toBeVisible(component, elementKey);
        if (value === undefined) {
            return expect(element).toHaveAttribute(name, /.+/);
        }
        return expect(element).toHaveAttribute(name, value);
    });
    /**
     * {@include assertions/toHaveClass/index.md}
     */
    Assertions.toHaveClass = createComponentInteraction("$component: I want $element have class.", async ({ element, component, elementKey }, value) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toHaveClass(value);
    });
    /**
     * {@include assertions/toHaveValue/index.md}
     */
    Assertions.toHaveValue = createComponentInteraction("$component: I want $element have value.", async ({ element, component, elementKey }, value) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toHaveValue(value);
    });
    /**
     * {@include assertions/toBeBusy/index.md}
     */
    Assertions.toBeBusy = createComponentInteraction("$component: I want $element is busy.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toHaveAttribute("aria-busy", "true");
    });
    /**
     * {@include assertions/toBeNotBusy/index.md}
     */
    Assertions.toBeNotBusy = createComponentInteraction("$component: I want $element is not busy.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return expect(element).toHaveAttribute("aria-busy", "false");
    });
    /**
     * {@include assertions/withStep/index.md}
     */
    Assertions.withStep = createStepWrapper({
        toBeVisible: Assertions.toBeVisible,
        toHaveText: Assertions.toHaveText,
        toContainText: Assertions.toContainText,
        toHaveNoText: Assertions.toHaveNoText,
        toBeHidden: Assertions.toBeHidden,
        toHaveQuantity: Assertions.toHaveQuantity,
        toBeEnabled: Assertions.toBeEnabled,
        toBeChecked: Assertions.toBeChecked,
        toBeDisabled: Assertions.toBeDisabled,
        toHaveAttribute: Assertions.toHaveAttribute,
        toHaveClass: Assertions.toHaveClass,
        toHaveValue: Assertions.toHaveValue,
        toBeBusy: Assertions.toBeBusy,
        toBeNotBusy: Assertions.toBeNotBusy,
    });
})(Assertions || (Assertions = {}));

export { Assertions };
