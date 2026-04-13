import { Actions, createComponent, createWebsite, type Website } from "@duplojs/playwright";
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

// [!code highlight:21]
const searchForm = createComponent(
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
		getMethods({ elements }) {
			return {
				async fillSearch(value: string) {
					await elements.input.fill(value);
				},
			};
		},
	},
);

testClient("component example", async({ website }) => {
	const component = searchForm(website);

	// [!code highlight:2]
	await component.methods.fillSearch("duplojs");
	await Actions.click(component, "submitButton");
});
