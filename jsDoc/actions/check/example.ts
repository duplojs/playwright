import { Actions, createComponent, type Website } from "@scripts";

declare const website: Website;

const form = createComponent("form", {
	getMainElement({ body }) {
		return body.locator("form");
	},
	getElements({ mainElement }) {
		return {
			remember: mainElement.locator("input[type='checkbox']"),
		};
	},
});

const component = form(website);

await Actions.check(component, "remember");
