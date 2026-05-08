'use strict';

var test = require('playwright/test');
var utils = require('@duplojs/utils');
var kind = require('./kind.cjs');

const missingComponentElementErrorKind = kind.createDuplojsPlaywrightKind("missing-component-element-error");
class MissingComponentElementError extends utils.kindHeritage("missing-component-element-error", missingComponentElementErrorKind, Error) {
    params;
    constructor(params) {
        super({
            [missingComponentElementErrorKind.definition.name]: params,
        }, [
            [
                `Missing element "${params.elementKey}" on component "${params.componentName}".`,
                `Available elements: ${params.availableElements.join(", ") || "none"}.`,
            ].join(" "),
        ]);
        this.params = params;
    }
}
/**
 * {@include createComponentInteraction/index.md}
 */
function createComponentInteraction(stepName, step) {
    return (component, elementSelector, ...args) => {
        const [elementKey, elementDesignation] = typeof elementSelector === "string"
            ? [elementSelector, elementSelector]
            : [elementSelector[0], `${elementSelector[0]}::${elementSelector[1]}`];
        const element = utils.justExec(() => {
            const selectedElement = component.elements?.[elementKey];
            if (!selectedElement) {
                throw new MissingComponentElementError({
                    componentName: component.name,
                    elementKey: elementKey.toString(),
                    availableElements: Object.keys(component.elements ?? {}),
                });
            }
            else if (typeof elementSelector === "string") {
                return selectedElement;
            }
            else if (elementSelector[1] === "first") {
                return selectedElement.first();
            }
            else if (elementSelector[1] === "last") {
                return selectedElement.last();
            }
            else {
                return selectedElement.nth(elementSelector[1]);
            }
        });
        return test.step(stepName
            .replace("$component", component.name)
            .replace("$element", elementDesignation), () => step({
            element,
            component,
            elementKey,
        }, ...args));
    };
}
/**
 * {@include createStepWrapper/index.md}
 */
function createStepWrapper(wrapperStepEmbeddedFunction) {
    return (stepName) => new Proxy(wrapperStepEmbeddedFunction, {
        get(target, prop) {
            const wrappedStep = target[prop];
            return (...args) => test.step(stepName, () => wrappedStep(...args));
        },
    });
}

exports.MissingComponentElementError = MissingComponentElementError;
exports.createComponentInteraction = createComponentInteraction;
exports.createStepWrapper = createStepWrapper;
