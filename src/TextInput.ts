import { emitKeypressEvents, createInterface, Interface, Key } from 'readline';
import { Action }                                              from './Action';
import { Terminal }                                            from './Terminal';
import { Widget }                                              from './Widget';

export class TextInput extends Widget {
	protected hasError: boolean;
	protected answer = '';
	protected cursorAt = 0;
	protected keypress: any;
	protected rlInterface: Interface;

	constructor(
		terminal: Terminal,
		protected question: string,
		protected validator?: (v: string) => boolean
	) {
		super(terminal);
	}

	setValidator(validator: (v: string) => boolean) {
		this.validator = validator;
	}

	async start(): Promise<any> {
		return new Promise((resolve) => {
			this.rlInterface = createInterface({ input: this.terminal.stdin, escapeCodeTimeout: 50 });
			emitKeypressEvents(this.terminal.stdin, this.rlInterface);
			this.terminal.setRawMode(true);

			this.keypress = (str: string, key: Key) => {
				const action = Action.actionName(key);
				// this.terminal.text(key.name);
				switch (action) {
					case 'home':
						this.home();
						return;
					case 'end':
						this.end();
						return;
					case 'left':
						this.left();
						return;
					case 'right':
						this.right();
						return;
					case 'backspace':
						this.backspace();
						return;
					case 'delete':
						this.delete();
						return;
					case 'abort':
					case 'escape':
						this.close();
						resolve(null);
						break;
					case 'return':
						if (this.validator && !this.validator(this.answer)) {
							this.hasError = true;
							return;
						}

						this.close();
						resolve(this.answer);
						break;
					default:
						this.write(str);
				}
			};

			this.terminal.stdin.on('keypress', this.keypress);
			this.draw();
		});
	}

	left() {
		if (this.cursorAt <= 0) {
			return;
		}

		this.cursorAt--;
		this.terminal.moveTo(-1);
	}

	right() {
		if (this.cursorAt >= this.answer.length) {
			return;
		}

		this.cursorAt++;
		this.terminal.moveTo(1);
	}

	home() {
		if (this.cursorAt <= 0) {
			return;
		}

		this.cursorAt = 0;
		this.terminal.cursorTo(this.question.length + 1);
	}

	end() {
		if (this.cursorAt >= this.answer.length) {
			return;
		}

		const maxCursor = this.question.length + this.answer.length + 1;
		this.cursorAt = maxCursor;
		this.terminal.cursorTo(maxCursor);
	}

	backspace() {
		if (this.answer.length === 0 || this.cursorAt <= 0) {
			return;
		}

		const s1 = this.answer.slice(0, this.cursorAt - 1);
		const s2 = this.answer.slice(this.cursorAt);

		this.answer = s1 + s2;
		this.cursorAt--;

		this.draw();
	}

	delete() {
		if (this.answer.length === 0 || this.cursorAt >= this.answer.length) {
			return;
		}

		const s1 = this.answer.slice(0, this.cursorAt);
		const s2 = this.answer.slice(this.cursorAt + 1);
		this.answer = s1 + s2;

		this.draw();
	}

	write(k: string) {
		if (!k || k.length < 1) {
			return;
		}
		const s1 = this.answer.slice(0, this.cursorAt);
		const s2 = this.answer.slice(this.cursorAt);
		this.answer = s1 + k + s2;
		this.cursorAt = s1.length + 1;
		this.hasError = false;

		this.draw();
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

		this.terminal.text(this.question, { fg: this.hasError ? 'red' : 'cyan' }).space();
		this.terminal.text(this.answer);
		this.terminal.clearLine(1);

		this.terminal.cursorTo(this.question.length + this.cursorAt + 1);
	}
}