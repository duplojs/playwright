import { createComponent, createPage, type Website } from "@scripts";

const toolbar = createComponent(
	"toolbar",
	{
		getMainElement({ body }) {
			return body.locator("[data-toolbar]");
		},
	},
);

declare const website: Website;

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

const article = articlePage(website);
const path = article.makePath({ slug: "typed-pages" });
