import { Actions, createComponent, type Website } from "@scripts";

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

await Actions.withStep("search form: submit a query").fill(component, "query", "duplojs");
await Actions.withStep("search form: submit a query").click(component, "submit");
