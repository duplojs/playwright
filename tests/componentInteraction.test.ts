import { createComponentInteraction, createStepWrapper } from "@scripts/componentInteraction";

const { stepMock } = vi.hoisted(() => ({
	stepMock: vi.fn((_stepName: string, callback: () => unknown) => callback()),
}));

vi.mock("playwright/test", () => ({
	default: {
		step: stepMock,
	},
}));

beforeEach(() => {
	vi.clearAllMocks();
});

describe("createComponentInteraction", () => {
	it("runs the step", async() => {
		const element = { click: vi.fn().mockResolvedValue("clicked") };
		const interaction = createComponentInteraction(
			"$component: I click on $element.",
			({ element }) => element.click(),
		);

		const result = await interaction(
			{
				name: "search-form",
				elements: { submit: element },
			} as never,
			"submit",
		);

		expect(result).toBe("clicked");
		expect(element.click).toHaveBeenCalledTimes(1);
		expect(stepMock).toHaveBeenCalledWith(
			"search-form: I click on submit.",
			expect.any(Function),
		);
	});

	it("throws when the element is missing", () => {
		const interaction = createComponentInteraction(
			"$component: I click on $element.",
			() => undefined,
		);

		expect(() => (interaction as (...args: any[]) => unknown)(
			{
				name: "search-form",
				elements: {},
			},
			"submit",
		)).toThrowError(
			"Missing element \"submit\" on component \"search-form\". Available elements: none.",
		);
	});

	it("throws when elements are undefined", () => {
		const interaction = createComponentInteraction(
			"$component: I click on $element.",
			() => undefined,
		);

		expect(() => (interaction as (...args: any[]) => unknown)(
			{
				name: "search-form",
				elements: undefined,
			},
			"submit",
		)).toThrowError(
			"Missing element \"submit\" on component \"search-form\". Available elements: none.",
		);
	});
});

describe("createStepWrapper", () => {
	it("wraps the step", async() => {
		const click = vi.fn().mockResolvedValue("wrapped");
		const wrapper = createStepWrapper({ click });

		const result = await wrapper("custom step").click("component", "element");

		expect(result).toBe("wrapped");
		expect(click).toHaveBeenCalledWith("component", "element");
		expect(stepMock).toHaveBeenCalledWith("custom step", expect.any(Function));
	});
});
