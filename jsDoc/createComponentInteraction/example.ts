import { createComponent, createComponentInteraction, type Website } from "@scripts";

declare const website: Website;

const clickOn = createComponentInteraction(
	"$component: I click on $element.",
	async({ element }) => {
		await element.click();
	},
);

const searchForm = createComponent(
	"searchForm",
	{
		getMainElement({ body }) {
			return body.locator("[data-search-form]");
		},
		getElements({ mainElement }) {
			return {
				submitButton: mainElement.locator("button[type='submit']"),
			};
		},
	},
);

const component = searchForm(website);

await clickOn(component, "submitButton");
