import { Assertions, createPage, createWebsite, type Website } from "@duplojs/playwright";
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
			},
		});

		await use(website);
	},
});

const homePage = createPage(
	"home",
	{
		makePath() {
			return "/";
		},
		getMainElement({ body }) {
			return body.locator("main");
		},
		getElements({ mainElement }) {
			return {
				title: mainElement.locator("h1"),
			};
		},
	},
);

testClient("home page", async({ website }) => {
	// [!code highlight:3]
	const home = await website.iNavigateTo(homePage);

	await Assertions.toBeVisible(home, "title");
});
