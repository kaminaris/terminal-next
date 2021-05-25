import { Terminal } from './Terminal';

export class ProgressBar {
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

	indent = 0;
	startChar = '[';
	endChar = ']';

	constructor(
		protected terminal: Terminal,
		protected max: number,
		protected progress: number = 0,
		protected width: number = 40,
		protected text: string = '',
		protected style: string = 'default'
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

		return this;
	}

	calculateProgress() {
		return Math.ceil(this.progress * this.width / this.max);
	}

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

	async setProgress(progress: number) {
		this.progress = progress;
		await this.draw();

		return this;
	}
}