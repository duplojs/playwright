import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

const form = createComponent("form", {
	getMainElement({ body }) {
		return body.locator("form");
	},
	getElements({ mainElement }) {
		return {
			submit: mainElement.locator("button[type='submit']"),
		};
	},
});

const component = form(website);

await Assertions.toBeEnabled(component, "submit");
