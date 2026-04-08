import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

const panel = createComponent("panel", {
	getMainElement({ body }) {
		return body.locator("[data-panel]");
	},
	getElements({ mainElement }) {
		return {
			submit: mainElement.locator("button"),
		};
	},
});

const component = panel(website);

await Assertions.toBeNotBusy(component, "submit");
