import { createComponentInteraction } from "@duplojs/playwright";

// [!code highlight:6]
const submitSearch = createComponentInteraction(
	"$component: I submit $element.",
	async({ element }) => {
		await element.click();
	},
);
