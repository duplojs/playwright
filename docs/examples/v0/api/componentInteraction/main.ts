import { createComponent, createComponentInteraction, createWebsite } from "@duplojs/playwright";
import test from "playwright/test";

test("component interaction example", async({ page, context }) => {
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

	// [!code highlight:6]
	const submitSearch = createComponentInteraction(
		"$component: I submit $element.",
		async({ element }) => {
			await element.click();
		},
	);

	const component = searchForm(website);

	// [!code highlight:1]
	await submitSearch(component, "submit");
});
