import { $ as built$ } from "../dist/tinyquery"; // Built version
import { $ } from "../src/TinyQuery"; // Dev version

describe("TinyQuery Text Manipulation", () => {
	// Set up the DOM before each test
	beforeEach(() => {
		document.body.innerHTML = '<div id="test">Hello</div>';
	});

	// Clean up after each test
	afterEach(() => {
		document.body.innerHTML = ""; // Reset the DOM
	});

	const runTests = ($: (selector: string) => any) => {
		test("Get initial text content", () => {
			const el = $(`#test`);
			expect(el.text()).toBe("Hello");
		});

		test("Set new text content", () => {
			const el = $(`#test`);
			el.text("New text");
			expect(el.text()).toBe("New text");
		});

		test("Set empty text content", () => {
			const el = $("#test");
			el.text(""); // Setting to empty
			expect(el.text()).toBe(""); // Expect empty
		});

		test("Append content", () => {
			const el = $("#test");
			el.append("<span> Appended!</span>");
			expect(el.html()).toContain("Appended!"); // Check if content is appended
		});

		test("Prepend content", () => {
			const el = $("#test");
			el.prepend("<span> Prepended!</span>");
			expect(el.html()).toContain("Prepended!"); // Check if content is prepended
		});

		test("Get parent element", () => {
			const el = $("#test");
			const parent = el.parent();
			expect(parent.elements.length).toBe(1); // There should be one parent element
		});

		test("Get child elements", () => {
			const el = $("#test");
			el.append("<span>Child</span>");
			const children = el.children();
			expect(children.elements.length).toBe(1); // There should be one child element
		});

		test("Toggle visibility", () => {
			const el = $("#test");
			el.hide(); // Hide the element
			expect(el.css("display")).toBe("none"); // Check if hidden
			el.show(); // Show the element
			expect(el.css("display")).not.toBe("none"); // Check if visible
		});

		test("Add class", () => {
			const el = $("#test");
			el.addClass("new-class");
			expect(el.attr("class")).toContain("new-class"); // Check if class was added
		});

		test("Remove class", () => {
			const el = $(`#test`).addClass("new-class");
			el.removeClass("new-class");
			expect(el.attr("class")).not.toContain("new-class"); // Check if class was removed
		});

		test("Toggle class", () => {
			const el = $(`#test`);
			el.toggleClass("toggle-class");
			expect(el.attr("class")).toContain("toggle-class"); // Check if class was added
			el.toggleClass("toggle-class");
			expect(el.attr("class")).not.toContain("toggle-class"); // Check if class was removed
		});

		test("Set multiple CSS properties", () => {
			const el = $("#test");
			el.css({
				color: "red",
				backgroundColor: "blue",
			});
			expect(el.css("color")).toBe("red"); // Check if color was set
			expect(el.css("background-color")).toBe("blue"); // Check if background color was set
		});

		test("Set single CSS property", () => {
			const el = $("#test");
			el.css("display", "block");
			expect(el.css("display")).toBe("block"); // Check if display property was set
		});

		test("Get CSS property", () => {
			const el = $("#test");
			el.css("display", "none");
			expect(el.css("display")).toBe("none"); // Check if display property can be retrieved
		});
	};

	describe("Development Version Tests", () => {
		runTests($); // Test with development version
	});

	describe("Built Version Tests", () => {
		runTests(built$); // Test with built version
	});
});
