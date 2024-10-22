import { TinyQueryInterface } from "./types";
import { on, off, trigger } from "./events";
import {
	text,
	html,
	val,
	append,
	prepend,
	parent as getParent,
	children as getChildren,
	show,
	hide,
	toggle,
	css,
	addClass,
	removeClass,
	toggleClass,
	attr,
	removeAttr,
	serialize,
	each,
} from "./dom";

class TinyQuery implements TinyQueryInterface {
	elements: HTMLElement[];

	constructor(selector: string | HTMLElement[]) {
		if (Array.isArray(selector)) {
			this.elements = selector; // Accept an array of HTMLElements
		} else {
			this.elements = Array.from(document.querySelectorAll(selector)); // Fallback to selector string
		}
	}

	// Event handling
	on(event: string, callback: EventListener): this {
		on(this.elements, event, callback);
		return this;
	}

	off(event: string, callback?: EventListener): this {
		off(this.elements, event, callback);
		return this;
	}

	trigger(event: string): this {
		trigger(this.elements, event);
		return this;
	}

	click(callback: EventListener): this {
		return this.on("click", callback);
	}

	// DOM manipulation methods in TinyQuery
	text(content?: string): this | string {
		if (content === undefined) {
			return text(this.elements) || ""; // Get text content, return empty string if undefined
		}
		text(this.elements, content); // Set text content
		return this; // Return this for chaining
	}

	html(content?: string): this | string {
		if (content === undefined) {
			return html(this.elements) || ""; // Get HTML content, return empty string if undefined
		}
		html(this.elements, content); // Set HTML content
		return this; // Return this for chaining
	}

	val(value?: string): this | string {
		if (value === undefined) {
			return val(this.elements) || ""; // Get value, return empty string if undefined
		}
		val(this.elements, value); // Set value
		return this; // Return this for chaining
	}

	append(content: string | HTMLElement): this {
		append(this.elements, content); // Append content
		return this; // Return this for chaining
	}

	prepend(content: string | HTMLElement): this {
		prepend(this.elements, content); // Prepend content
		return this; // Return this for chaining
	}

	parent(): TinyQueryInterface {
		const parentElements = getParent(this.elements); // Get parent elements using imported function
		return new TinyQuery(parentElements); // Return new TinyQuery instance
	}

	children(): TinyQueryInterface {
		const childElements = getChildren(this.elements); // Get children elements using imported function
		return new TinyQuery(childElements); // Return new TinyQuery instance
	}

	show(): this {
		show(this.elements); // Show elements
		return this; // Return this for chaining
	}

	hide(): this {
		hide(this.elements); // Hide elements
		return this; // Return this for chaining
	}

	toggle(): this {
		toggle(this.elements); // Toggle visibility
		return this; // Return this for chaining
	}

	// CSS manipulation
	css(property: string | Record<string, string>, value?: string): this {
		if (typeof property === "string" && value !== undefined) {
			// Set single CSS property
			css(this.elements, property, value);
		} else if (typeof property === "object") {
			// Set multiple CSS properties
			css(this.elements, property); // Pass the object directly
		}
		return this; // Return this for chaining
	}

	addClass(className: string): this {
		addClass(this.elements, className); // Add class
		return this; // Return this for chaining
	}

	removeClass(className: string): this {
		removeClass(this.elements, className); // Remove class
		return this; // Return this for chaining
	}

	toggleClass(className: string): this {
		toggleClass(this.elements, className); // Toggle class
		return this; // Return this for chaining
	}

	// Get or set attributes
	attr(attribute: string, value?: string): this | string | null {
		if (value === undefined) {
			const result = attr(this.elements, attribute); // Call the imported attr function
			return result; // No need to check for undefined since dom.ts returns null now
		} else {
			attr(this.elements, attribute, value); // Set the attribute
			return this; // Return this for chaining
		}
	}

	removeAttr(attribute: string): this {
		removeAttr(this.elements, attribute); // Remove attribute
		return this; // Return this for chaining
	}

	each(callback: (index: number, el: HTMLElement) => void): this {
		each(this.elements, callback); // Iterate over elements
		return this; // Return this for chaining
	}

	serialize(): string {
		return serialize(this.elements); // Serialize form elements
	}
}

// Export the TinyQuery instance function
export const $ = (selector: string): TinyQuery => new TinyQuery(selector);
