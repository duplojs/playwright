import { Actions, createComponent, type Website } from "@scripts";

declare const website: Website;

const form = createComponent("form", {
	getMainElement({ body }) {
		return body.locator("form");
	},
	getElements({ mainElement }) {
		return {
			query: mainElement.locator("input"),
		};
	},
});

const component = form(website);

await Actions.fill(component, "query", "duplojs");
