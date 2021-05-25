import { emitKeypressEvents, createInterface, Interface, Key } from 'readline';
import { Action }                                              from './Action';
import { Terminal }                                            from './Terminal';
import { Widget }                                              from './Widget';

export class Confirm extends Widget {
	protected keypress: any;
	protected answer = true;
	protected rlInterface: Interface;

	constructor(
		terminal: Terminal,
		protected question: string,
		protected yesDefault = true,
		protected yes = 'y',
		protected no = 'n',
	) {
		super(terminal);
		this.answer = yesDefault;

		if (yes.length !== 1 || no.length !== 1) {
			throw new Error('Confirm requires one letter yes/no');
		}
	}

	async start(): Promise<boolean|null> {
		return new Promise((resolve) => {
			this.rlInterface = createInterface({ input: this.terminal.stdin, escapeCodeTimeout: 50 });
			emitKeypressEvents(this.terminal.stdin, this.rlInterface);
			this.terminal.setRawMode(true);

			this.keypress = (str: string, key: Key) => {
				const action = Action.actionName(key);
				// this.terminal.text(key.name);
				switch (action) {
					case 'abort':
					case 'escape':
						this.close();
						resolve(null);
						break;
					case 'return':
						this.close();
						resolve(this.answer);
						break;
					default:
						const answer = this.check(str);
						if (answer !== null) {
							this.close();
							resolve(answer);
						}
				}
			};

			this.terminal.stdin.on('keypress', this.keypress);
			this.draw();
		});
	}

	check(str: string) {
		if (str.toLowerCase() === this.yes.toLowerCase()) {
			return true;
		}

		if (str.toLowerCase() === this.no.toLowerCase()) {
			return false;
		}

		return null;
	}

	close() {
		this.terminal.setRawMode(false);
		this.terminal.stdin.removeListener('keypress', this.keypress);
		this.terminal.showCursor();
		this.terminal.newline();
		this.rlInterface.close();
	}

	draw() {
		this.terminal.cursorTo(0);

		this.terminal.text(this.question, { fg: 'cyan' }).space();
		const y = this.yesDefault ? this.yes.toUpperCase() : this.yes;
		const n = this.yesDefault ? this.no : this.no.toUpperCase();
		this.terminal.text(`[${y}/${n}]`);
		this.terminal.clearLine(1);

	}
}