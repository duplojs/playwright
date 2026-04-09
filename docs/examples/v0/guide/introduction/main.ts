import { createPage, createWebsite } from "@duplojs/playwright";
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
	},
);

test("home page example", async({ page, context }) => {
	// [!code highlight:8]
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "https://example.com",
		},
	});

	// [!code highlight:1]
	await website.iNavigateTo(homePage);
});
