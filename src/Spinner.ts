import { Widget }   from './Widget';
import { Terminal } from './Terminal';

/**
 * Spinner with a text
 *
 * ![](https://i.imgur.com/3wYKaNZ.gif)
 *
 * ```ts
 * const spinner = new Spinner(t, 'test');
 * // you define tick rate yourself or just tick whenever a progress is made
 * const itv = setInterval(async () => {
 * 	await spinner.draw();
 * }, 100);
 *
 * setTimeout(()=> {
 * 	clearInterval(itv);
 * 	// important, in order to stop terminal from flickering, show cursor after this is done
 * 	t.showCursor();
 * }, 3000);
 * ```
 */
export class Spinner extends Widget {
	/**
	 * Style definition for this widget is just a character array ex `['a', 'b', 'c']`
	 */
	styles: {[name: string]: any} = {
		default: {
			chars: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		},
	};

	/**
	 * Current spinner tick (index of chars table)
	 */
	tick = 0;

	/**
	 * Creates Spinner instance
	 *
	 * @param terminal {@link Terminal} instance
	 * @param text text after spinner
	 */
	constructor(
		terminal: Terminal,
		protected text: string = '',
	) {
		super(terminal);
	}

	/**
	 * Draw the spinner, either in interval or when progress is made
	 *
	 * @param noTick if this is set to `true`, tick will not inscrease
	 */
	draw(noTick = false) {
		this.terminal.hideCursor();
		this.terminal.clearLine();
		this.terminal.cursorTo(0);

		const chars = this.styleDef.chars;
		this.terminal
			.text(chars[this.tick], {fg: 'cyan'})
			.text(' ')
			.text(this.text);

		if (!noTick) {
			this.tick++;
		}

		if (this.tick >= chars.length) {
			this.tick = 0;
		}

		return this;
	}

	/**
	 * Sets the text after spinner
	 *
	 * @param t
	 */
	setText(t: string) {
		this.text = t;
		this.draw();

		return this;
	}
}