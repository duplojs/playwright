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

test("dashboard fonctionne", async({ page, context }) => {
	// [!code highlight:8]
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "https://example.com",
			prefix: "admin",
		},
	});

	// [!code highlight:5]
	const dashboard = await website.iNavigateTo(dashboardPage);

	await website.iExpectTitleIs("Dashboard");
	await website.iWantToBeOnPage(dashboardPage);
	await dashboard.mainElement.isVisible();
});
