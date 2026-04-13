import { Actions, createComponent, createPage, createWebsite, type Website } from "@duplojs/playwright";
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

const SearchForm = createComponent(
	"searchForm",
	{
		getMainElement({ body }) {
			return body.locator("[data-search-form]");
		},
		getElements({ mainElement }) {
			return {
				input: mainElement.locator("input"),
				submitButton: mainElement.locator("button[type='submit']"),
			};
		},
	},
);

const HomePage = createPage(
	"home",
	{
		makePath() {
			return "/";
		},
		getMainElement({ body }) {
			return body.locator("main");
		},
		components: [SearchForm],
	},
);

testClient("home page", async({ website }) => {
	// [!code highlight:1]
	const homePage = await website.iNavigateTo(HomePage);

	const searchForm = await homePage.iWantToSeeComponent("searchForm");

	await Actions.fill(searchForm, "input", "superValue");
	await Actions.click(searchForm, "submitButton");
});
