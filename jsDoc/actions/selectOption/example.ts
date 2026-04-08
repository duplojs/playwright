import { Actions, createComponent, type Website } from "@scripts";

declare const website: Website;

const form = createComponent("form", {
	getMainElement({ body }) {
		return body.locator("form");
	},
	getElements({ mainElement }) {
		return {
			role: mainElement.locator("select"),
		};
	},
});

const component = form(website);

await Actions.selectOption(component, "role", "admin");
