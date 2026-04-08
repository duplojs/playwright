import { Actions, createComponent, type Website } from "@scripts";

declare const website: Website;

const board = createComponent("board", {
	getMainElement({ body }) {
		return body.locator("[data-board]");
	},
	getElements({ mainElement }) {
		return {
			card: mainElement.locator("[data-card]"),
			column: mainElement.locator("[data-column]"),
		};
	},
});

const component = board(website);

await Actions.dragTo(component, "card", component.elements.column);
