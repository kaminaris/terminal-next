import { Terminal } from './Terminal';

/**
 * Abstract class to server as styled widget base
 */
export abstract class Widget {
	/**
	 * @ignore
	 */
	styles: { [name: string]: any } = {};

	/**
	 * current widget style
	 */
	style = 'default';

	/**
	 * Indent for widget (not every widget uses this)
	 */
	indent = 0;

	constructor(
		protected terminal: Terminal
	) {
	}

	/**
	 * @ignore
	 */
	get styleDef() {
		return this.styles[this.style];
	}

	/**
	 * Sets a new style for widget, style has to be added first, style is widget specific
	 *
	 * @category Widget Styles
	 * @param style style name
	 */
	setStyle(style: string) {
		if (typeof this.styles[style] === 'undefined') {
			throw new Error(`Style '${ style }' not found`);
		}
		this.style = style;

		return this;
	}

	/**
	 * Adds new style for a widget
	 *
	 * @category Widget Styles
	 * @param name style name
	 * @param style style definition, widget specific
	 */
	addStyle(name: string, style: any) {
		this.styles[name] = style;

		return this;
	}

	abstract draw();
}