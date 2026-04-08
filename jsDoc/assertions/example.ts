import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

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

const form = searchForm(website);

await Assertions.toHaveValue(form, "query", "duplojs");
await Assertions.toBeVisible(form, "submit");
