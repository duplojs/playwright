import { defineConfig } from "vitepress";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { ModuleDetectionKind, ModuleKind, ModuleResolutionKind } from "typescript";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { A, innerPipe, S } from "@duplojs/utils";

const hostname = "https://playwright.duplojs.dev";
const ogImage = new URL("/images/ogImage.png", hostname).toString();

export default defineConfig({
	title: "@duplojs/playwright",
	base: "/",
	cleanUrls: true,
	sitemap: {
		hostname,
	},
	themeConfig: {
		logo: "/images/logo.png",

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/duplojs/playwright",
			},
			{
				icon: "npm",
				link: "https://www.npmjs.com/package/@duplojs/playwright",
			},
			{
				icon: "linkedin",
				link: "https://linkedin.com/company/duplojs",
			},
			{
				icon: "discord",
				link: "https://discord.gg/5d6Ze5Wuqm",
			},
		],

		search: {
			provider: "local",
		},
	},
	head: [
		[
			"link",
			{
				rel: "icon",
				href: "/images/logo.ico",
			},
		],
		[
			"meta",
			{
				property: "og:type",
				content: "website",
			},
		],
		[
			"meta",
			{
				property: "og:image",
				content: ogImage,
			},
		],
		[
			"meta",
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
		],
		[
			"meta",
			{
				name: "twitter:image",
				content: ogImage,
			},
		],
	],
	markdown: {
		lineNumbers: false,
		theme: {
			light: "light-plus",
			dark: "dark-plus",
		},
		config: (md) => {
			md.use(groupIconMdPlugin);
		},
		codeTransformers: [
			{
				name: "duplo-version-transformer",
				preprocess: innerPipe(
					S.replace(
						/\/\/ @version: (?<version>[0-9]+)/,
						({ namedGroups }) => A.join(
							[
								"// @filename: @duplojs/playwright.ts",
								`export * from "@v${namedGroups?.version ?? ""}";`,

								"// @filename: index.ts",
								"// ---cut---",
							],
							"\n",
						),
					),
					S.replace(
						/ ?@ts-expect-error/g,
						"",
					),
				),
			},
			transformerTwoslash({
				twoslashOptions: {
					compilerOptions: {
						module: ModuleKind.ESNext,
						moduleResolution: ModuleResolutionKind.Bundler,
						moduleDetection: ModuleDetectionKind.Force,
						paths: {
							"@v0": ["libs/v0/index"],
						},
					},
				},
			}),
		],
		languages: ["js", "jsx", "ts", "tsx", "bash", "json", "yaml", "yml"],
	},
	vite: {
		plugins: [groupIconVitePlugin()],
	},
	transformPageData(pageData) {
		const frontmatter = pageData.frontmatter ?? {};

		if (frontmatter.layout === "home") {
			return pageData;
		}

		if (typeof frontmatter.pageClass === "string" && frontmatter.pageClass.length > 0) {
			return pageData;
		}

		frontmatter.pageClass = "layout-wide";
		pageData.frontmatter = frontmatter;

		return pageData;
	},
	locales: {
		fr: {
			description: "Surcouche Playwright pour structurer des tests autour d'un Website, de Pages et de Components réutilisables.",
			label: "Français",
			lang: "fr",
			link: "/fr/",
			themeConfig: {
				nav: [
					{
						text: "Guide",
						link: "/fr/v0/guide/",
					},
					{
						text: "API",
						items: [
							{
								text: "Overview",
								link: "/fr/v0/api/",
							},
							{
								text: "Website",
								link: "/fr/v0/api/website",
							},
							{
								text: "Component",
								link: "/fr/v0/api/component",
							},
							{
								text: "Component Interaction",
								link: "/fr/v0/api/componentInteraction",
							},
							{
								text: "Page",
								link: "/fr/v0/api/page",
							},
							{
								text: "Actions",
								link: "/fr/v0/api/actions",
							},
							{
								text: "Assertions",
								link: "/fr/v0/api/assertions",
							},
						],
					},
					{
						text: "v0.x (LTS)",
						items: [
							{
								text: "v0.x (LTS)",
								link: "/fr/v0/guide/",
							},
						],
					},
				],
				sidebar: {
					"/fr/v0/guide/": [
						{
							text: "Guide",
							items: [
								{
									text: "Introduction",
									link: "/fr/v0/guide/",
								},
								{
									text: "Démarrage rapide",
									link: "/fr/v0/guide/quickStart",
								},
								{
									text: "Structurer ses tests",
									link: "/fr/v0/guide/structure",
								},
								{
									text: "Penser en specs",
									link: "/fr/v0/guide/specs",
								},
								{
									text: "Créer des helpers métier",
									link: "/fr/v0/guide/helpers",
								},
								{
									text: "CI/CD",
									items: [
										{
											text: "GitHub Actions",
											link: "/fr/v0/guide/ci/githubActions",
										},
										{
											text: "GitLab CI",
											link: "/fr/v0/guide/ci/gitlabCI",
										},
									],
								},
							],
						},
					],
				},
				docFooter: {
					prev: "Page précédente",
					next: "Page suivante",
				},
				outline: {
					label: "Sur cette page",
				},
				returnToTopLabel: "Retour en haut",
				darkModeSwitchLabel: "Mode sombre",
				footer: {
					copyright: "Copyright © 2025-présent Contributeurs de DuploJS",
					message: "Diffusé sous licence MIT.",
				},
			},
		},
		root: {
			description: "A Playwright layer for structuring tests around a reusable Website, Pages, and Components.",
			label: "English",
			lang: "en",
			link: "/en/",
			themeConfig: {
				nav: [
					{
						text: "Guide",
						link: "/en/v0/guide/",
					},
					{
						text: "API",
						items: [
							{
								text: "Overview",
								link: "/en/v0/api/",
							},
							{
								text: "Website",
								link: "/en/v0/api/website",
							},
							{
								text: "Component",
								link: "/en/v0/api/component",
							},
							{
								text: "Component Interaction",
								link: "/en/v0/api/componentInteraction",
							},
							{
								text: "Page",
								link: "/en/v0/api/page",
							},
							{
								text: "Actions",
								link: "/en/v0/api/actions",
							},
							{
								text: "Assertions",
								link: "/en/v0/api/assertions",
							},
						],
					},
					{
						text: "v0.x (LTS)",
						items: [
							{
								text: "v0.x (LTS)",
								link: "/en/v0/guide/",
							},
						],
					},
				],
				sidebar: {
					"/en/v0/guide/": [
						{
							text: "Getting Started",
							items: [
								{
									text: "Introduction",
									link: "/en/v0/guide/",
								},
								{
									text: "Quick Start",
									link: "/en/v0/guide/quickStart",
								},
							],
						},
					],
				},
				docFooter: {
					prev: "Previous page",
					next: "Next page",
				},
				outline: { label: "On this page" },
				returnToTopLabel: "Return to top",
				darkModeSwitchLabel: "Dark mode",
				footer: {
					copyright: "Copyright © 2025-present DuploJS Contributors",
					message: "Released under the MIT license.",
				},
			},
		},
	},
});
