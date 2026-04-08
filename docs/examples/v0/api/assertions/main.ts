import { Assertions, createComponent, createWebsite } from "@duplojs/playwright";
import test from "playwright/test";

test("assertions example", async({ page, context }) => {
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
	await Assertions.toHaveValue(component, "query", "duplojs");
	await Assertions.toBeVisible(component, "submit");
});
