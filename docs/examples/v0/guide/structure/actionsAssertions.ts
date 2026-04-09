import { Actions, Assertions, createComponent, type Website } from "@duplojs/playwright";

declare const website: Website;

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

const component = newsletter(website);

// [!code highlight:3]
await Actions.fill(component, "email", "john@doe.dev");
await Actions.click(component, "submit");
await Assertions.toBeVisible(component, "submit");
