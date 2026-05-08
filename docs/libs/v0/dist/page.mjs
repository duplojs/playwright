import { createComponent } from './component.mjs';
import { createDuplojsPlaywrightKind } from './kind.mjs';

const pageKind = createDuplojsPlaywrightKind("page");
/**
 * {@include createPage/index.md}
 */
function createPage(name, params) {
    const component = createComponent(name, params);
    function page(website) {
        const pageBase = component(website);
        return pageKind.setTo({
            ...pageBase,
            makePath: params.makePath,
        }, name);
    }
    page.componentName = name;
    return page;
}

export { createPage };
