import { createComponent } from "@scripts";

const alertBanner = createComponent(
	"alertBanner",
	{
		getMainElement({ body }) {
			return body.locator("[data-alert]");
		},
		getElements({ mainElement }) {
			return {
				title: mainElement.locator("h2"),
				description: mainElement.locator("p"),
			};
		},
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
				input: mainElement.locator("input"),
				submitButton: mainElement.locator("button[type='submit']"),
			};
		},
		getMethods({ elements }) {
			return {
				async fillSearch(value: string) {
					await elements.input.fill(value);
				},
			};
		},
		components: [alertBanner],
	},
);
