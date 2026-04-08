'use strict';

var component = require('./component.cjs');
var kind = require('./kind.cjs');

const pageKind = kind.createDuplojsPlaywrightKind("page");
/**
 * {@include createPage/index.md}
 */
function createPage(name, params) {
    const component$1 = component.createComponent(name, params);
    function page(website) {
        const pageBase = component$1(website);
        return pageKind.setTo({
            ...pageBase,
            makePath: params.makePath,
        }, name);
    }
    page.componentName = name;
    return page;
}

exports.createPage = createPage;
