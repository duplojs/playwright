import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

const panel = createComponent("panel", {
	getMainElement({ body }) {
		return body.locator("[data-panel]");
	},
	getElements({ mainElement }) {
		return {
			loader: mainElement.locator("[data-loader]"),
		};
	},
});

const component = panel(website);

await Assertions.toBeHidden(component, "loader");
