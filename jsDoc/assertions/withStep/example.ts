import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

const form = createComponent("form", {
	getMainElement({ body }) {
		return body.locator("form");
	},
	getElements({ mainElement }) {
		return {
			query: mainElement.locator("input"),
			submit: mainElement.locator("button[type='submit']"),
		};
	},
});

const component = form(website);

await Assertions.withStep("search form: validate state").toHaveValue(component, "query", "duplojs");
await Assertions.withStep("search form: validate state").toBeVisible(component, "submit");
