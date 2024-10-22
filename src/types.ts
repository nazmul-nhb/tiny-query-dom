export interface TinyQueryInterface {
	on(event: string, callback: EventListener): this;
	off(event: string, callback?: EventListener): this;
	trigger(event: string): this;
	click(callback: EventListener): this;
	text(content?: string): this | string;
	html(content?: string): this | string;
	val(value?: string): this | string;
	append(content: string | HTMLElement): this;
	prepend(content: string | HTMLElement): this;
	parent(): TinyQueryInterface;
	children(): TinyQueryInterface;
	show(): this;
	hide(): this;
	toggle(): this;
	css(property: string, value: string): this;
	css(properties: Record<string, string>): this;
	addClass(className: string): this;
	removeClass(className: string): this;
	toggleClass(className: string): this;
	attr(attribute: string, value?: string): this | string | null;
	removeAttr(attribute: string): this;
	each(callback: (index: number, el: HTMLElement) => void): this;
	serialize(): string;
}
