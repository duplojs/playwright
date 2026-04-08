'use strict';

var componentInteraction = require('./componentInteraction.cjs');
var assertions = require('./assertions.cjs');
var test = require('playwright/test');

/**
 * {@include actions/index.md}
 */
exports.Actions = void 0;
(function (Actions) {
    /**
     * {@include actions/click/index.md}
     */
    Actions.click = componentInteraction.createComponentInteraction("$component: I click on $element.", async ({ element, elementKey, component }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.click();
    });
    /**
     * {@include actions/forceClick/index.md}
     */
    Actions.forceClick = componentInteraction.createComponentInteraction("$component: I force click on $element.", ({ element }) => element.click({ force: true }));
    /**
     * {@include actions/hover/index.md}
     */
    Actions.hover = componentInteraction.createComponentInteraction("$component: I hover $element.", async ({ element, elementKey, component }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.hover();
    });
    /**
     * {@include actions/focus/index.md}
     */
    Actions.focus = componentInteraction.createComponentInteraction("$component: I focus $element.", async ({ element, elementKey, component }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.focus();
    });
    /**
     * {@include actions/fill/index.md}
     */
    Actions.fill = componentInteraction.createComponentInteraction("$component: I fill on $element.", async ({ element, elementKey, component }, content) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.fill(content);
    });
    /**
     * {@include actions/type/index.md}
     */
    Actions.type = componentInteraction.createComponentInteraction("$component: I type on $element.", async ({ element, elementKey, component }, text, options) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.pressSequentially(text, options);
    });
    /**
     * {@include actions/clear/index.md}
     */
    Actions.clear = componentInteraction.createComponentInteraction("$component: I clear $element.", async ({ element, elementKey, component }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.clear();
    });
    /**
     * {@include actions/press/index.md}
     */
    Actions.press = componentInteraction.createComponentInteraction("$component: I press on $element.", async ({ element, elementKey, component }, key) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.press(key);
    });
    /**
     * {@include actions/check/index.md}
     */
    Actions.check = componentInteraction.createComponentInteraction("$component: I check $element.", async ({ element, elementKey, component }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.check();
    });
    /**
     * {@include actions/uncheck/index.md}
     */
    Actions.uncheck = componentInteraction.createComponentInteraction("$component: I uncheck $element.", async ({ element, elementKey, component }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.uncheck();
    });
    /**
     * {@include actions/selectOption/index.md}
     */
    Actions.selectOption = componentInteraction.createComponentInteraction("$component: I select option on $element.", async ({ element, elementKey, component }, values) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.selectOption(values);
    });
    /**
     * {@include actions/dragTo/index.md}
     */
    Actions.dragTo = componentInteraction.createComponentInteraction("$component: I drag $element to target.", async ({ element, elementKey, component }, target, options) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        await test.expect(target).toBeVisible();
        return element.dragTo(target, options);
    });
    /**
     * {@include actions/extractContent/index.md}
     */
    Actions.extractContent = componentInteraction.createComponentInteraction("$component: I extract content of $element.", async ({ element, component, elementKey }) => {
        await assertions.Assertions.toBeVisible(component, elementKey);
        return element.textContent();
    });
    /**
     * {@include actions/withStep/index.md}
     */
    Actions.withStep = componentInteraction.createStepWrapper({
        click: Actions.click,
        forceClick: Actions.forceClick,
        hover: Actions.hover,
        focus: Actions.focus,
        fill: Actions.fill,
        type: Actions.type,
        clear: Actions.clear,
        press: Actions.press,
        check: Actions.check,
        uncheck: Actions.uncheck,
        selectOption: Actions.selectOption,
        dragTo: Actions.dragTo,
        extractContent: Actions.extractContent,
    });
})(exports.Actions || (exports.Actions = {}));
