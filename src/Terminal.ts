import { Codes }                                      from './Codes';
import { TextFormatOptions }                          from './Interface/TextFormatOptions';
import { ReadStream, WriteStream }                    from 'tty';
import { clearLine, cursorTo, moveCursor, Direction } from 'readline';

export class Terminal {
	codes = new Codes();

	constructor(
		public stdout?: WriteStream,
		public stdin?: ReadStream
	) {
		if (!this.stdout) {
			this.stdout = process.stdout;
		}
		if (!this.stdin) {
			this.stdin = process.stdin;
		}
	}

	format(t: string, options?: TextFormatOptions) {
		let output = '';
		if (options?.bg) {
			output += this.codes.getColorCode('background', options.bg);
		}

		if (options?.fg) {
			output += this.codes.getColorCode('foreground', options.fg);
		}

		if (options?.bright) {
			output += this.codes.bright;
		}

		if (options?.dim) {
			output += this.codes.dim;
		}

		if (options?.underscore) {
			output += this.codes.underscore;
		}

		output += t;

		output += this.codes.reset;
		return output;
	}

	text(t: string, options?: TextFormatOptions) {
		this.stdout.write(this.format(t, options));

		return this;
	}

	space() {
		return this.text(' ');
	}

	newline() {
		this.stdout.write('\n');

		return this;
	}

	clear() {
		this.stdout.write(this.codes.clear);
	}

	clearLine(dir: Direction = 1) {
		clearLine(this.stdout, dir);
	}

	cursorTo(x: number, y?: number) {
		cursorTo(this.stdout, x, y);
	}

	moveTo(dx: number, dy?: number) {
		moveCursor(this.stdout, dx, dy);
	}

	hideCursor() {
		this.stdout.write('\x1B[?25l');
	}

	showCursor() {
		this.stdout.write('\x1B[?25h');
	}

	setRawMode(raw: boolean) {
		if (this.stdin.isTTY) {
			this.stdin.setRawMode(raw);
		}
	}

	getCursor(): Promise<{ x: number; y: number }> {
		// const rl = createInterface(this.stdin, this.stdout);
		// const pos = rl.getCursorPos();
		// rl.close();
		// return pos;

		return new Promise((resolve) => {
			const code = '\x1b[6n';
			this.stdin.resume();
			this.setRawMode(true);

			this.stdin.once('data', (b) => {
				const match = /\[(\d+);(\d+)R$/.exec(b.toString());
				if (match) {
					resolve({
						x: +match[2],
						y: +match[1]
					});
				}

				// cleanup and close stdin
				this.setRawMode(false);
				this.stdin.pause();
			});

			this.stdout.write(code);
			this.stdout.emit('data', code);
		});
	}
}