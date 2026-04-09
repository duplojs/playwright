import { Actions, createComponentInteraction, createStepWrapper } from "@duplojs/playwright";

const submitSearch = createComponentInteraction(
	"$component: I submit $element.",
	async({ element }) => {
		await element.click();
	},
);

// [!code highlight:8]
const searchStep = createStepWrapper({
	fillQuery: Actions.fill,
	submit: submitSearch,
});

declare const component: Parameters<typeof submitSearch>[0];

await searchStep("search flow").fillQuery(component, "query", "duplojs");
await searchStep("search flow").submit(component, "submit");
