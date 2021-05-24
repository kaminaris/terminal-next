import { Widget }   from './Widget';
import { Terminal } from './Terminal';

export class Spinner extends Widget {
	styles: {[name: string]: any} = {
		default: {
			chars: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		},
	};

	tick = 0;

	constructor(
		terminal: Terminal,
		protected text: string = '',
	) {
		super(terminal);
	}

	async draw(noTick = false) {
		this.terminal.hideCursor();
		this.terminal.clearLine();
		await this.terminal.cursorTo(0);

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

	async setText(t: string) {
		this.text = t;
		await this.draw();

		return this;
	}
}