import test, { expect } from 'playwright/test';
import { createDuplojsPlaywrightKind } from './kind.mjs';

const webSiteKind = createDuplojsPlaywrightKind("web-site");
/**
 * {@include createWebsite/index.md}
 */
function createWebsite(params) {
    let prefix = params.envConfig.prefix;
    function applyPrefix(path) {
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        return prefix ? `/${prefix}${normalizedPath}` : normalizedPath;
    }
    function buildUrl(path) {
        const prefixedPath = applyPrefix(path);
        if (!params.envConfig.baseUrl) {
            return prefixedPath;
        }
        return new URL(prefixedPath, params.envConfig.baseUrl).toString();
    }
    async function hooksBeforeNavigateOnPage() {
        if (!params.hooks?.beforeNavigateOnPage) {
            return;
        }
        return test.step("website: launch before navigate on page hooks", params.hooks.beforeNavigateOnPage);
    }
    async function hooksAfterNavigateOnPage() {
        if (!params.hooks?.afterNavigateOnPage) {
            return;
        }
        return test.step("website: launch after navigate on page hooks", params.hooks.afterNavigateOnPage);
    }
    const website = webSiteKind.setTo({
        playwrightPage: params.playwrightPage,
        async iNavigateTo(pageEngine, ...args) {
            const page = pageEngine(website);
            const url = buildUrl(page.makePath(...args));
            await test.step(`website: I navigate to ${page.name}:${url}`, async () => {
                await hooksBeforeNavigateOnPage();
                await params.playwrightPage.goto(url);
                await expect(params.playwrightPage).toHaveURL(url);
                await expect(page.mainElement).toBeVisible();
            });
            await hooksAfterNavigateOnPage();
            return page;
        },
        async iGoTo(pageEngine, ...args) {
            const page = pageEngine(website);
            const url = buildUrl(page.makePath(...args));
            await test.step(`website: I go to ${page.name}:${url}`, async () => {
                await hooksBeforeNavigateOnPage();
                await params.playwrightPage.goto(url);
            });
            await hooksAfterNavigateOnPage();
            return page;
        },
        async iWantToBeOnPage(pageEngine) {
            const page = pageEngine(website);
            await test.step(`website: I want be on this page ${page.name}`, async () => {
                await expect(page.mainElement).toBeVisible();
            });
            return page;
        },
        async iWantToSee(componentEngine) {
            const component = componentEngine(website);
            await test.step(`website: I want to see ${component.name}`, async () => {
                await expect(component.mainElement).toBeVisible();
            });
            return component;
        },
        async iWantToExist(componentEngine) {
            const component = componentEngine(website);
            await test.step(`website: I want to exist ${component.name}`, async () => {
                await expect(component.mainElement).toBeAttached();
            });
            return component;
        },
        async iExpectTitleIs(title) {
            await test.step(`website: I want page title is ${title.toString()}`, async () => {
                await expect(params.playwrightPage).toHaveTitle(title);
            });
        },
        async iExpectUrlIs(url) {
            await test.step(`website: I want page url is ${url.toString()}`, async () => {
                await expect(params.playwrightPage).toHaveURL(url);
            });
        },
        addCookies(...args) {
            return params.playwrightBrowserContext.addCookies(...args);
        },
        async refresh() {
            await test.step("website: Reload page", async () => {
                await params.playwrightPage.reload();
            });
            await hooksAfterNavigateOnPage();
        },
        setPrefix(newPrefix) {
            prefix = newPrefix;
        },
        async waitForHydration() {
            await test.step("website: wait for hydration", async () => {
                await params.playwrightPage.waitForSelector("[aria-hydrated=\"true\"]", {
                    state: "visible",
                    timeout: 5000,
                });
            });
        },
    });
    return website;
}

export { createWebsite };
