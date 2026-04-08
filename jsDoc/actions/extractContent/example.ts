import { Actions, createComponent, type Website } from "@scripts";

declare const website: Website;

const panel = createComponent("panel", {
	getMainElement({ body }) {
		return body.locator("[data-panel]");
	},
	getElements({ mainElement }) {
		return {
			title: mainElement.locator("h2"),
		};
	},
});

const component = panel(website);

const title = await Actions.extractContent(component, "title");
