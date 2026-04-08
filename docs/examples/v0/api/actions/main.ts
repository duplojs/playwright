import { Actions, createComponent, createWebsite } from "@duplojs/playwright";
import test from "playwright/test";

test("actions example", async({ page, context }) => {
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "https://example.com",
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

	const component = searchForm(website);

	// [!code highlight:2]
	await Actions.fill(component, "query", "duplojs");
	await Actions.click(component, "submit");
});
