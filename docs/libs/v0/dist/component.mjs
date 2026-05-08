import test, { expect } from 'playwright/test';
import { createDuplojsPlaywrightKind } from './kind.mjs';

const componentKind = createDuplojsPlaywrightKind("component");
/**
 * {@include createComponent/index.md}
 */
function createComponent(name, params) {
    const componentWrapper = Object.fromEntries(params.components?.map((component) => [component.componentName, component]) ?? []);
    function component(website) {
        const body = website.playwrightPage.locator("body");
        const mainElement = params.getMainElement({ body });
        const elements = params.getElements?.({
            mainElement,
            body,
        });
        const methods = params.getMethods?.({
            mainElement,
            body,
            elements: elements,
            website,
        });
        const methodsWithProxy = new Proxy((methods ?? {}), {
            get(target, key) {
                return (...args) => test.step(`${name}: Call method ${key.toString()}.`, () => target[key](...args));
            },
        });
        return componentKind.setTo({
            name,
            mainElement,
            elements,
            methods: methodsWithProxy,
            components: componentWrapper,
            iWantToSeeComponent: async (componentName) => {
                const component = componentWrapper[componentName](website);
                await test.step(`${name}: I want to see ${component.name}`, async () => {
                    await expect(component.mainElement).toBeVisible();
                });
                return component;
            },
        }, name);
    }
    component.componentName = name;
    return component;
}

export { createComponent };
