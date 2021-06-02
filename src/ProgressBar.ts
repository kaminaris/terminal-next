import { Widget }   from './Widget';
import { Terminal } from './Terminal';

/**
 * ProgressBar widget, example
 *
 * ![](https://i.imgur.com/IYDxWBa.gif)
 *
 * ```ts
 * const pb = new ProgressBar(t, 100);
 * await pb.draw();
 * let prog = 0;
 * const itv = setInterval(async () => {
 * 	await pb.setProgress(prog);
 * 	prog++;
 * 	if (prog > 100) {
 * 		clearInterval(itv);
 * 	}
 * }, 50);
 * ```
 *
 * Built in styles: default, text
 *
 * Style definition:
 * ```ts
 * styleName: {
 * 	full: '\u2588',
 * 	empty: '\u2591'
 * }
 * ```
 */
export class ProgressBar extends Widget {
	/**
	 * You can override style of this widget by executing functions `addStyle` and `setStyle`
	 */
	styles: { [name: string]: any } = {
		default: {
			full: '\u2588',
			empty: '\u2591'
		},
		text: {
			full: '=',
			empty: ' '
		}
	};

	/**
	 * Starting character, before the progressbar itself
	 */
	startChar = '[';
	/**
	 * Ending character, after progressbar
	 */
	endChar = ']';

	/**
	 * Creates new ProgressBar instance
	 *
	 * @param terminal Terminal instance
	 * @param max maximum numerical progress
	 * @param progress current numerical progress
	 * @param width character width
	 * @param text text to display after progressbar
	 */
	constructor(
		terminal: Terminal,
		protected max: number,
		protected progress: number = 0,
		protected width: number = 40,
		protected text: string = ''
	) {
		super(terminal);
	}

	/**
	 * Calculate current progress width based on progress, max and progressbar width
	 */
	calculateProgress() {
		return Math.ceil(this.progress * this.width / this.max);
	}

	/**
	 * Execute the widget
	 */
	async draw() {
		this.terminal.hideCursor();
		this.terminal.clearLine();
		await this.terminal.cursorTo(0);
		const progress = this.calculateProgress();

		let progressBar = ' '.repeat(this.indent);
		progressBar += this.startChar;
		progressBar += this.styleDef.full.repeat(progress);
		progressBar += this.styleDef.empty.repeat(this.width - progress);
		progressBar += this.endChar;

		const progressText = ' ' + this.progress + '/' + this.max;

		this.terminal
			.text(progressBar, { fg: 'cyan' })
			.text(progressText)
			.text(' ')
			.text(this.text);
	}

	/**
	 * Sets the current progress and draws progressbar
	 *
	 * @param progress
	 */
	async setProgress(progress: number) {
		this.progress = progress;
		await this.draw();

		return this;
	}
}