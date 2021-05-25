import { Terminal } from './Terminal';

export abstract class Widget {
	styles: { [name: string]: any } = {};
	style = 'default';

	indent = 0;

	constructor(
		protected terminal: Terminal
	) {
	}

	get styleDef() {
		return this.styles[this.style];
	}

	setStyle(style: string) {
		if (typeof this.styles[style] === 'undefined') {
			throw new Error(`Style '${ style }' not found`);
		}
		this.style = style;
	}

	addStyle(name: string, style: any) {
		this.styles[name] = style;
	}

	abstract draw();
}