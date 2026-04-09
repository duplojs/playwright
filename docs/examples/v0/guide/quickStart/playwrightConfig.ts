import { defineConfig, devices } from "playwright/test";
import { environmentVariableOrThrow } from "@duplojs/server-utils";
import { DPE } from "@duplojs/utils";

const envs = await environmentVariableOrThrow({
	CI: DPE.coerce.boolean(),
	RETRIES: DPE.coerce.number(),
	WORKERS: DPE.coerce.number(),
});

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: envs.CI,
	retries: envs.RETRIES,
	workers: envs.WORKERS,
	reporter: [
		[
			"html",
			{
				open: "never",
				outputFolder: "playwright-report",
			},
		],
		["list"],
	],
	use: {
		headless: true,
		trace: "retain-on-failure",
		screenshot: "only-on-failure",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
