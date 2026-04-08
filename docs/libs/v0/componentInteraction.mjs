import test from 'playwright/test';
import { kindHeritage } from '@duplojs/utils';
import { createDuplojsPlaywrightKind } from './kind.mjs';

const missingComponentElementErrorKind = createDuplojsPlaywrightKind("missing-component-element-error");
class MissingComponentElementError extends kindHeritage("missing-component-element-error", missingComponentElementErrorKind, Error) {
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
    return (component, elementKey, ...args) => {
        const element = component.elements?.[elementKey];
        if (!element) {
            throw new MissingComponentElementError({
                componentName: component.name,
                elementKey: elementKey.toString(),
                availableElements: Object.keys(component.elements ?? {}),
            });
        }
        return test.step(stepName
            .replace("$component", component.name)
            .replace("$element", elementKey.toString()), () => step({
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

export { MissingComponentElementError, createComponentInteraction, createStepWrapper };
