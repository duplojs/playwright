import { Assertions, createComponent, createWebsite, type Website } from "@duplojs/playwright";
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

const searchForm = createComponent(
	"searchForm",
	{
		getMainElement({ body }) {
			return body.locator("[data-search-form]");
		},
		getElements({ mainElement }) {
			return {
				query: mainElement.locator("input"),
				submit: mainElement.locator("button[type='submit']"),
			};
		},
	},
);

testClient("assertions example", async({ website }) => {
	const component = searchForm(website);

	// [!code highlight:2]
	await Assertions.toHaveValue(component, "query", "duplojs");
	await Assertions.toBeVisible(component, "submit");
});
