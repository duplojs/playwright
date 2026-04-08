import { createPage, createWebsite } from "@scripts";
import { type BrowserContext as PlaywrightBrowserContext, type Page as PlaywrightPage } from "playwright/test";

const dashboardPage = createPage(
	"dashboard",
	{
		makePath() {
			return "/dashboard";
		},
		getMainElement({ body }) {
			return body.locator("main");
		},
	},
);

declare const playwrightPage: PlaywrightPage;
declare const playwrightBrowserContext: PlaywrightBrowserContext;

const website = createWebsite({
	playwrightPage,
	playwrightBrowserContext,
	envConfig: {
		baseUrl: "https://example.com",
		prefix: "admin",
	},
});

const dashboard = await website.iNavigateTo(dashboardPage);

await website.iExpectUrlIs("https://example.com/admin/dashboard");
await website.iWantToBeOnPage(dashboardPage);
await dashboard.mainElement.isVisible();
