import { createPage, createWebsite, type Website } from "@scripts";
import { type BrowserContext as PlaywrightBrowserContext, type Page as PlaywrightPage } from "playwright/test";
import { test as base } from "playwright/test";

interface TestFixtures {
	website: Website;
}

const test = base.extend<TestFixtures>({
	async website({ page, context }, use) {
		const website = createWebsite({
			playwrightPage: page,
			playwrightBrowserContext: context,
			envConfig: {
				baseUrl: "https://example.com",
				prefix: "admin",
			},
		});

		await use(website);
	},
});

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
void playwrightPage;
void playwrightBrowserContext;

test("opens the dashboard", async({ website }) => {
	const dashboard = await website.iNavigateTo(dashboardPage);

	await website.iExpectUrlIs("https://example.com/admin/dashboard");
	await website.iWantToBeOnPage(dashboardPage);
	await dashboard.mainElement.isVisible();
});
