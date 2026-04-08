import { Actions, createComponent, type Website } from "@scripts";

declare const website: Website;

const menu = createComponent("menu", {
	getMainElement({ body }) {
		return body.locator("[data-menu]");
	},
	getElements({ mainElement }) {
		return {
			trigger: mainElement.locator("[data-trigger]"),
		};
	},
});

const component = menu(website);

await Actions.hover(component, "trigger");
