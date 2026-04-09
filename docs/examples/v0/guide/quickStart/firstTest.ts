import { Assertions, createPage, createWebsite } from "@duplojs/playwright";
import test from "playwright/test";

const homePage = createPage(
	"home",
	{
		makePath() {
			return "/";
		},
		getMainElement({ body }) {
			return body.locator("main");
		},
		getElements({ mainElement }) {
			return {
				title: mainElement.locator("h1"),
			};
		},
	},
);

test("home page example", async({ page, context }) => {
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "https://example.com",
		},
	});

	// [!code highlight:3]
	const home = await website.iNavigateTo(homePage);

	await Assertions.toBeVisible(home, "title");
});
