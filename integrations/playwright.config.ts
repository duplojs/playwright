import { environmentVariableOrThrow } from "@duplojs/server-utils";
import { DP, DPE } from "@duplojs/utils";
import { defineConfig, devices } from "playwright/test";

const envs = await environmentVariableOrThrow({
	CI: DPE.coerce
		.boolean()
		.optional({ coalescingValue: false }),
	RETRIES: DPE.coerce
		.number()
		.addChecker(DP.checkerInt())
		.optional({ coalescingValue: 0 }),
	WORKERS: DPE.coerce
		.number()
		.addChecker(DP.checkerInt())
		.optional({ coalescingValue: 1 }),
});

export default defineConfig({
	testDir: "./",
	testMatch: ["index.test.ts"],
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
