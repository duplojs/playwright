import { createComponent } from "@duplojs/playwright";

const newsletter = createComponent(
	"newsletter",
	{
		getMainElement({ body }) {
			return body.locator("[data-newsletter]");
		},
		getElements({ mainElement }) {
			return {
				email: mainElement.locator("input"),
				submit: mainElement.locator("button"),
			};
		},
	},
);

