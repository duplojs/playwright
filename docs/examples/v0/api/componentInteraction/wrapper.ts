import { Actions, type Component, createComponentInteraction, createStepWrapper } from "@duplojs/playwright";
import { type Locator } from "playwright";

const submitSearch = createComponentInteraction(
	"$component: I submit $element.",
	async({ element }) => {
		await element.click();
	},
);

// [!code highlight:4]
const searchStep = createStepWrapper({
	fillQuery: Actions.fill,
	submit: submitSearch,
});

declare const component: Component<"", {
	query: Locator;
	submit: Locator;
}>;

// [!code highlight:2]
await searchStep("search flow").fillQuery(component, "query", "duplojs");
await searchStep("search flow").submit(component, "submit");
