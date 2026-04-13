import { createComponent, createComponentInteraction, createWebsite, type Website } from "@duplojs/playwright";
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

// [!code highlight:6]
const submitSearch = createComponentInteraction(
	"$component: I submit $element.",
	async({ element }) => {
		await element.click();
	},
);

testClient("component interaction example", async({ website }) => {
	const component = await website.iWantToSee(searchForm);

	// [!code highlight:1]
	await submitSearch(component, "submit");
});
