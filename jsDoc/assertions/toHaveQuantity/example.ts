import { Assertions, createComponent, type Website } from "@scripts";

declare const website: Website;

const list = createComponent("list", {
	getMainElement({ body }) {
		return body.locator("[data-list]");
	},
	getElements({ mainElement }) {
		return {
			items: mainElement.locator("li"),
		};
	},
});

const component = list(website);

await Assertions.toHaveQuantity(component, "items", {
	quantity: 3,
	operator: "gte",
});
