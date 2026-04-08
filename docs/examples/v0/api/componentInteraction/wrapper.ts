import { Actions, createComponentInteraction, createStepWrapper } from "@duplojs/playwright";

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

declare const component: Parameters<typeof submitSearch>[0];

// [!code highlight:2]
await searchStep("search a term").fillQuery(component, "query", "duplojs");
await searchStep("search a term").submit(component, "submit");
