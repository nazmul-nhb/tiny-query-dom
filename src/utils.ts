export const forEachElement = (
	elements: HTMLElement[],
	callback: (el: HTMLElement) => void
): void => {
	elements.forEach((el) => {
		if (el) {
			callback(el);
		}
	});
};

export const setStyles = (
	el: HTMLElement,
	properties: { [key: string]: string }
): void => {
	Object.keys(properties).forEach((prop) => {
		(el.style as any)[prop] = properties[prop];
	});
};
