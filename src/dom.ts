import { forEachElement, setStyles } from "./utils";

// Get or set text content
export const text = (
	elements: HTMLElement[],
	content?: string
): string | void => {
	if (content === undefined) {
		return elements[0]?.textContent || "";
	}
	forEachElement(elements, (el) => (el.textContent = content));
};

// Get or set inner HTML
export const html = (
	elements: HTMLElement[],
	content?: string
): string | void => {
	if (content === undefined) {
		return elements[0]?.innerHTML || "";
	}
	forEachElement(elements, (el) => (el.innerHTML = content));
};

// Get or set value of form elements
export const val = (elements: HTMLElement[], value?: string): string | void => {
	if (value === undefined) {
		return (elements[0] as HTMLInputElement)?.value || "";
	}
	forEachElement(elements, (el) => ((el as HTMLInputElement).value = value));
};

// Append content to elements
export const append = (
	elements: HTMLElement[],
	content: string | HTMLElement
): void => {
	forEachElement(elements, (el) => {
		if (typeof content === "string") {
			el.insertAdjacentHTML("beforeend", content);
		} else {
			el.appendChild(content);
		}
	});
};

// Prepend content to elements
export const prepend = (
	elements: HTMLElement[],
	content: string | HTMLElement
): void => {
	forEachElement(elements, (el) => {
		if (typeof content === "string") {
			el.insertAdjacentHTML("afterbegin", content);
		} else {
			el.insertBefore(content, el.firstChild);
		}
	});
};

// Show elements
export const show = (elements: HTMLElement[]): void => {
	forEachElement(elements, (el) => {
		el.style.display = "";
	});
};

// Hide elements
export const hide = (elements: HTMLElement[]): void => {
	forEachElement(elements, (el) => {
		el.style.display = "none";
	});
};

// Toggle visibility of elements
export const toggle = (elements: HTMLElement[]): void => {
	forEachElement(elements, (el) => {
		el.style.display = el.style.display === "none" ? "" : "none";
	});
};

// Set CSS styles (single or multiple)
export const css = (
	elements: HTMLElement[],
	property: string | Record<string, string>,
	value?: string
): void => {
	forEachElement(elements, (el) => {
		if (typeof property === "string" && value !== undefined) {
			// Ensure property is a valid CSS property
			(el.style as any)[property] = value; // Set single CSS property
		} else if (typeof property === "object") {
			// Set multiple CSS properties
			for (const key in property) {
				(el.style as any)[key] = property[key];
			}
		}
	});
};

// Add a class to elements
export const addClass = (elements: HTMLElement[], className: string): void => {
	forEachElement(elements, (el) => {
		el.classList.add(className);
	});
};

// Remove a class from elements
export const removeClass = (
	elements: HTMLElement[],
	className: string
): void => {
	forEachElement(elements, (el) => {
		el.classList.remove(className);
	});
};

// Toggle a class on elements
export const toggleClass = (
	elements: HTMLElement[],
	className: string
): void => {
	forEachElement(elements, (el) => {
		el.classList.toggle(className);
	});
};

// Get or set attributes
// Get or set attributes
export const attr = (
	elements: HTMLElement[],
	attribute: string,
	value?: string
): string | null => {
	if (value === undefined) {
		return elements[0]?.getAttribute(attribute) || null; // Ensure null is returned
	}

	// Set the attribute value for all elements
	forEachElement(elements, (el) => {
		el.setAttribute(attribute, value); // Set the attribute value
	});

	// Return this for chaining or just return undefined
	return null; // Indicate that the attribute was set (could also return `undefined`)
};

// Remove an attribute from elements
export const removeAttr = (
	elements: HTMLElement[],
	attribute: string
): void => {
	forEachElement(elements, (el) => {
		el.removeAttribute(attribute);
	});
};

// Iterate over elements
export const each = (
	elements: HTMLElement[],
	callback: (index: number, el: HTMLElement) => void
): void => {
	elements.forEach((el, index) => {
		callback(index, el);
	});
};

// Serialize form elements into a query string
export const serialize = (elements: HTMLElement[]): string => {
	const formElements = elements as HTMLFormElement[];
	const data: string[] = [];

	formElements.forEach((form) => {
		const inputs = form.querySelectorAll("input, select, textarea");
		inputs.forEach((input) => {
			if (
				input instanceof HTMLInputElement ||
				input instanceof HTMLSelectElement ||
				input instanceof HTMLTextAreaElement
			) {
				if (input.name && input.value) {
					data.push(
						`${encodeURIComponent(input.name)}=${encodeURIComponent(
							input.value
						)}`
					);
				}
			}
		});
	});

	return data.join("&");
};

// Get parent elements
export const parent = (elements: HTMLElement[]): HTMLElement[] => {
	return elements
		.map((el) => el.parentElement)
		.filter((el): el is HTMLElement => el !== null);
};

// Get children elements
export const children = (elements: HTMLElement[]): HTMLElement[] => {
	return elements.flatMap((el) => Array.from(el.children) as HTMLElement[]);
};
