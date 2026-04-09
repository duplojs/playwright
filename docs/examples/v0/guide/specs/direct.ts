import { createPage, createWebsite } from "@duplojs/playwright";
import test from "playwright/test";

const dashboardPage = createPage(
	"dashboard",
	{
		makePath() {
			return "/dashboard";
		},
		getMainElement({ body }) {
			return body.locator("main");
		},
	},
);

test("dashboard works", async({ page, context }) => {
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "https://example.com",
		},
	});

	// [!code highlight:1]
	await website.iNavigateTo(dashboardPage);
});
