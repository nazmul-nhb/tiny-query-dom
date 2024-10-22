import { forEachElement } from "./utils";

export const on = (
	elements: HTMLElement[],
	event: string,
	callback: EventListener
): void => {
	forEachElement(elements, (el) => el.addEventListener(event, callback));
};

export const off = (
	elements: HTMLElement[],
	event: string,
	callback?: EventListener
): void => {
	forEachElement(elements, (el) => el.removeEventListener(event, callback!));
};

export const trigger = (elements: HTMLElement[], event: string): void => {
	const evt = new Event(event);
	forEachElement(elements, (el) => el.dispatchEvent(evt));
};
