'use strict';

var componentInteraction = require('./componentInteraction.cjs');
var test = require('playwright/test');

/**
 * {@include assertions/index.md}
 */
exports.Assertions = void 0;
(function (Assertions) {
    /**
     * {@include assertions/toBeVisible/index.md}
     */
    Assertions.toBeVisible = componentInteraction.createComponentInteraction("$component: I want $element is visible.", async ({ element }) => {
        await element.scrollIntoViewIfNeeded();
        await test.expect(element).toBeVisible();
    });
    /**
     * {@include assertions/toHaveText/index.md}
     */
    Assertions.toHaveText = componentInteraction.createComponentInteraction("$component: I want $element have Text.", async ({ element, component, elementKey }, text) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toHaveText(text);
    });
    /**
     * {@include assertions/toContainText/index.md}
     */
    Assertions.toContainText = componentInteraction.createComponentInteraction("$component: I want $element contain Text.", async ({ element, component, elementKey }, text) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toContainText(text);
    });
    /**
     * {@include assertions/toHaveNoText/index.md}
     */
    Assertions.toHaveNoText = componentInteraction.createComponentInteraction("$component: I want $element have no Text.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toHaveText("");
    });
    /**
     * {@include assertions/toBeHidden/index.md}
     */
    Assertions.toBeHidden = componentInteraction.createComponentInteraction("$component: I want $element is hidden.", async ({ element }) => test.expect(element).toBeHidden());
    /**
     * {@include assertions/toHaveQuantity/index.md}
     */
    Assertions.toHaveQuantity = componentInteraction.createComponentInteraction("$component: I check quantity of $element.", async ({ element }, { quantity, operator }) => {
        if (operator === "gte") {
            return test.expect.poll(() => element.count(), { timeout: 5000 }).toBeGreaterThanOrEqual(quantity);
        }
        else if (operator === "lte") {
            return test.expect.poll(() => element.count(), { timeout: 5000 }).toBeLessThanOrEqual(quantity);
        }
        else {
            return test.expect.poll(() => element.count(), { timeout: 5000 }).toBe(quantity);
        }
    });
    /**
     * {@include assertions/toBeEnabled/index.md}
     */
    Assertions.toBeEnabled = componentInteraction.createComponentInteraction("$component: I want $element is enabled.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toBeEnabled();
    });
    /**
     * {@include assertions/toBeChecked/index.md}
     */
    Assertions.toBeChecked = componentInteraction.createComponentInteraction("$component: I want $element is checked.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toBeChecked();
    });
    /**
     * {@include assertions/toBeDisabled/index.md}
     */
    Assertions.toBeDisabled = componentInteraction.createComponentInteraction("$component: I want $element is disabled.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toBeDisabled();
    });
    /**
     * {@include assertions/toHaveAttribute/index.md}
     */
    Assertions.toHaveAttribute = componentInteraction.createComponentInteraction("$component: I want $element have attribute.", async ({ element, component, elementKey }, name, value) => {
        await Assertions.toBeVisible(component, elementKey);
        if (value === undefined) {
            return test.expect(element).toHaveAttribute(name, /.+/);
        }
        return test.expect(element).toHaveAttribute(name, value);
    });
    /**
     * {@include assertions/toHaveClass/index.md}
     */
    Assertions.toHaveClass = componentInteraction.createComponentInteraction("$component: I want $element have class.", async ({ element, component, elementKey }, value) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toHaveClass(value);
    });
    /**
     * {@include assertions/toHaveValue/index.md}
     */
    Assertions.toHaveValue = componentInteraction.createComponentInteraction("$component: I want $element have value.", async ({ element, component, elementKey }, value) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toHaveValue(value);
    });
    /**
     * {@include assertions/toBeBusy/index.md}
     */
    Assertions.toBeBusy = componentInteraction.createComponentInteraction("$component: I want $element is busy.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toHaveAttribute("aria-busy", "true");
    });
    /**
     * {@include assertions/toBeNotBusy/index.md}
     */
    Assertions.toBeNotBusy = componentInteraction.createComponentInteraction("$component: I want $element is not busy.", async ({ element, component, elementKey }) => {
        await Assertions.toBeVisible(component, elementKey);
        return test.expect(element).toHaveAttribute("aria-busy", "false");
    });
    /**
     * {@include assertions/withStep/index.md}
     */
    Assertions.withStep = componentInteraction.createStepWrapper({
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
})(exports.Assertions || (exports.Assertions = {}));
