import { createPage, createWebsite, type Website } from "@duplojs/playwright";
import test from "playwright/test";

interface TestFixtures {
	website: Website;
}

// [!code highlight:13]
const client = test.extend<TestFixtures>({
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

client.describe("Dashboard spec", () => {
	client("ouvre le dashboard", async({ website }) => {
		// [!code highlight:5]
		const dashboard = await website.iNavigateTo(dashboardPage);

		await website.iExpectTitleIs("Dashboard");
		await website.iWantToBeOnPage(dashboardPage);
		await dashboard.mainElement.isVisible();
	});
});
