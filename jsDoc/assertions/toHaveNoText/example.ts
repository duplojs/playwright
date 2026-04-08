import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

const panel = createComponent("panel", {
	getMainElement({ body }) {
		return body.locator("[data-panel]");
	},
	getElements({ mainElement }) {
		return {
			message: mainElement.locator("p"),
		};
	},
});

const component = panel(website);

await Assertions.toHaveNoText(component, "message");
