import { test } from "playwright/test";
import { Actions, Assertions, createComponent, createPage, createWebsite } from "@duplojs/playwright";
import { getCurrentWorkDirectoryOrThrow } from "@duplojs/server-utils";

const newsletterComponent = createComponent(
	"newsletter",
	{
		getMainElement({ body }) {
			return body.locator("[data-newsletter]");
		},
		getElements({ mainElement }) {
			return {
				feedback: mainElement.locator("[data-feedback]"),
				emailInput: mainElement.locator("#email"),
				submitButton: mainElement.locator("[data-submit]"),
			};
		},
	},
);

const homePage = createPage(
	"home",
	{
		makePath() {
			return `${getCurrentWorkDirectoryOrThrow()}/integration/index.html`;
		},
		getMainElement({ body }) {
			return body.locator("[data-page='home']");
		},
		getElements({ mainElement }) {
			return {
				title: mainElement.locator("h1"),
			};
		},
		components: [newsletterComponent],
	},
);
test("integration success flow", async({ page, context }) => {
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "file://",
		},
	});

	const home = await website.iNavigateTo(homePage);
	await website.iWantToBeOnPage(homePage);
	await website.iExpectTitleIs("Integration playground");
	await Assertions.toHaveText(home, "title", "Bienvenue sur le site de demo");
	await website.waitForHydration();

	const newsletter = await home.iWantToSeeComponent("newsletter");

	await Assertions.toHaveText(newsletter, "feedback", "Aucun email enregistre.");
	await Actions.fill(newsletter, "emailInput", "john@doe.dev");
	await Actions.click(newsletter, "submitButton");
	await Assertions.toContainText(newsletter, "feedback", "john@doe.dev");
	await Assertions.toBeNotBusy(newsletter, "submitButton");
	await Assertions.toHaveValue(newsletter, "emailInput", "john@doe.dev");
});

test("integration error flow", async({ page, context }) => {
	const website = createWebsite({
		playwrightPage: page,
		playwrightBrowserContext: context,
		envConfig: {
			baseUrl: "file://",
		},
	});

	const home = await website.iNavigateTo(homePage);
	await website.iWantToBeOnPage(homePage);
	await website.iExpectTitleIs("Integration playground");
	await Assertions.toHaveText(home, "title", "Bienvenue sur le site de demo");
	await website.waitForHydration();

	const newsletter = await home.iWantToSeeComponent("newsletter");

	await Assertions.toHaveText(newsletter, "feedback", "Aucun email enregistre.");
	await Actions.click(newsletter, "submitButton");
	await Assertions.toHaveText(newsletter, "feedback", "Email requis.");
	await Assertions.toBeNotBusy(newsletter, "submitButton");
	await Assertions.toHaveValue(newsletter, "emailInput", "");
});
