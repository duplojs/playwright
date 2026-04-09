import { createComponent, createWebsite } from "@duplojs/playwright";
import test from "playwright/test";

test("component example", async({ page, context }) => {
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "https://example.com",
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

	const component = searchForm(website);

	// [!code highlight:2]
	await component.methods.fillSearch("duplojs");
	await component.elements.submitButton.click();
});
