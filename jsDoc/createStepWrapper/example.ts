import { Actions, createComponent, createStepWrapper, type Website } from "@scripts";

declare const website: Website;

const withSearchStep = createStepWrapper({
	clickOn: Actions.click,
	fillInput: Actions.fill,
});

const searchForm = createComponent(
	"searchForm",
	{
		getMainElement({ body }) {
			return body.locator("[data-search-form]");
		},
		getElements({ mainElement }) {
			return {
				query: mainElement.locator("input"),
				submit: mainElement.locator("button[type='submit']"),
			};
		},
	},
);

const component = searchForm(website);

await withSearchStep("search form: submit a query").fillInput(component, "query", "duplojs");
await withSearchStep("search form: submit a query").clickOn(component, "submit");
