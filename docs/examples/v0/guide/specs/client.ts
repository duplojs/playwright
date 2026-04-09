import { createPage, createWebsite, type Website } from "@duplojs/playwright";
import test from "playwright/test";

interface Fixtures {
	website: Website;
}

// [!code highlight:13]
const client = test.extend<Fixtures>({
	async website({ page, context }, use) {
		const website = createWebsite({
			playwrightPage: page,
			playwrightBrowserContext: context,
			envConfig: {
				baseUrl: "https://example.com",
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

client.describe("dashboard spec", () => {
	client("opens the dashboard", async({ website }) => {
		// [!code highlight:1]
		await website.iNavigateTo(dashboardPage);
	});
});
