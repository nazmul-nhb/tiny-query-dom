import { $ } from "../src/TinyQuery";

describe("TinyQuery Text Manipulation", () => {
	// Set up the DOM before each test
	beforeEach(() => {
		document.body.innerHTML = '<div id="test">Hello</div>';
	});

	// Clean up after each test (optional, since you're resetting in beforeEach)
	afterEach(() => {
		document.body.innerHTML = ""; // Reset the DOM
	});

	test("Get initial text content", () => {
		const el = $("#test");
		expect(el.text()).toBe("Hello");
	});

	test("Set new text content", () => {
		const el = $("#test");
		el.text("New text");
		expect(el.text()).toBe("New text");
	});

	test("Set empty text content", () => {
		const el = $("#test");
		el.text(""); // Setting to empty
		expect(el.text()).toBe(""); // Expect empty
	});
});
