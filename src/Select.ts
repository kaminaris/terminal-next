import { emitKeypressEvents, createInterface } from 'readline';
import { Terminal }                            from './Terminal';
import { Widget }                              from './Widget';

export interface SelectOption {
	title: string;
	value: any;
	selected?: boolean;
}

/**
 * Basic select widget, example:
 *
 * ![](https://i.imgur.com/PUwIYkG.gif)
 *
 * ```ts
 * const options = [
 * 	{title: 'Option 1', value: '111'},
 * 	{title: 'Option 2', value: '222'},
 * 	{title: 'Some other option', value: '333'},
 * ];
 * const select = new Select(t, options);
 * const result = await select.start();
 * t.text('answer: ' + result);
 * ```
 */
export class Select extends Widget {
	options: SelectOption[] = [];

	protected firstDraw = true;

	/**
	 * Creates select widget instance
	 *
	 * @param terminal {@link Terminal} instance
	 * @param options select options, simple `{title: string, value: any}` array
	 */
	constructor(
		terminal: Terminal,
		options: SelectOption[]
	) {
		super(terminal);

		if (options.length === 0) {
			throw new Error('Options cannot be empty');
		}

		for (const o of options) {
			this.options.push({ title: o.title, value: o.value, selected: false });
		}

		this.options[0].selected = true;
	}

	/**
	 * Execute widget, stop terminal and wait for user input
	 */
	async start(): Promise<any> {
		return new Promise((resolve) => {
			const rl = createInterface({ input: this.terminal.stdin, escapeCodeTimeout: 50 });
			emitKeypressEvents(this.terminal.stdin, rl);
			this.terminal.setRawMode(true);

			this.terminal.hideCursor();
			const keypress = (str, key) => {
				// this.terminal.text(key.name);
				switch (key.name) {
					case 'up':
						this.moveChoice(-1);
						this.draw();
						break;
					case 'down':
						this.moveChoice(1);
						this.draw();
						break;
					case 'return':
						this.terminal.setRawMode(false);
						this.terminal.stdin.removeListener('keypress', keypress);
						this.terminal.showCursor();
						this.terminal.newline();
						rl.close();
						resolve(this.getValue());
						break;
				}
			};
			this.terminal.stdin.on('keypress', keypress);
			this.draw();
		});
	}

	async draw() {
		if (!this.firstDraw) {
			await this.terminal.cursorTo(0);
			await this.terminal.moveTo(0, -this.options.length + 1);
		}

		for (const o of this.options) {
			this.terminal.text(o.selected ? '>' : ' ', { fg: 'cyan' }).space();
			this.terminal.text(o.title);
			if (this.options.length - 1 > this.options.indexOf(o)) {
				this.terminal.newline();
			}
		}
		this.firstDraw = false;
	}

	/**
	 * @ignore
	 */
	moveChoice(dy: number) {
		let idx = this.options.findIndex(o => o.selected);
		const origIdx = idx;

		idx += dy;
		if (idx < 0) {
			idx = this.options.length - 1;
		}
		if (idx > this.options.length - 1) {
			idx = 0;
		}

		this.options[origIdx].selected = false;
		this.options[idx].selected = true;
	}

	/**
	 * Gets the selected option value
	 */
	getValue() {
		return this.options.find(o => o.selected).value;
	}
}