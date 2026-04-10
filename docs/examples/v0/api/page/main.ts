import { createComponent, createPage, createWebsite, type Website } from "@duplojs/playwright";
import test from "playwright/test";

interface TestFixtures {
	website: Website;
}

const testClient = test.extend<TestFixtures>({
	async website({ page, context }, use) {
		const website = createWebsite({
			playwrightPage: page,
			playwrightBrowserContext: context,
			envConfig: {
				baseUrl: "https://example.com",
			},
		});

		await use(website);
	},
});

const toolbar = createComponent(
	"toolbar",
	{
		getMainElement({ body }) {
			return body.locator("[data-toolbar]");
		},
	},
);

// [!code highlight:17]
const articlePage = createPage(
	"article",
	{
		makePath({ slug }: { slug: string }) {
			return `/articles/${slug}`;
		},
		getMainElement({ body }) {
			return body.locator("main");
		},
		getElements({ mainElement }) {
			return {
				title: mainElement.locator("h1"),
			};
		},
		components: [toolbar],
	},
);

testClient("page example", ({ website }) => {
	const article = articlePage(website);
	// [!code highlight:2]
	const path = article.makePath({ slug: "typed-pages" });
	void path;
});
