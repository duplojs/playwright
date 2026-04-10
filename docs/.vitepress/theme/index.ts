import type { Theme } from "vitepress";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import DefaultTheme from "vitepress/theme";
import TerminalBlock from "./components/TerminalBlock.vue";
import { WipPage } from "./components/WipPage";
import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";
import "./style.css";

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(TwoslashFloatingVue);
		app.component("TerminalBlock", TerminalBlock);
		app.component("WipPage", WipPage);
	},
} satisfies Theme;
