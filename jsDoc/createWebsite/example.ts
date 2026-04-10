import { createPage, createWebsite, type Website } from "@scripts";
import test from "playwright/test";

interface TestFixtures {
	website: Website;
}

const testClient = test.extend<TestFixtures>({
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

testClient("opens the dashboard", async({ website }) => {
	const dashboard = await website.iNavigateTo(dashboardPage);

	await website.iExpectUrlIs("https://example.com/admin/dashboard");
	await website.iWantToBeOnPage(dashboardPage);
	await dashboard.mainElement.isVisible();
});
