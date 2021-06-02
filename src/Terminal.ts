import { Codes }                                      from './Codes';
import { TextFormatOptions }                          from './Interface/TextFormatOptions';
import { ReadStream, WriteStream }                    from 'tty';
import { clearLine, cursorTo, moveCursor, Direction } from 'readline';

/**
 * Main terminal class that is mostly used for manipulating terminal streams
 */
export class Terminal {
	/** @ignore */
	codes = new Codes();

	/**
	 * Creates new instance of terminal
	 *
	 * @param stdout if not provided, process.stdout will be used
	 * @param stdin if not provided, process.stdin will be used
	 */
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

	/**
	 * Format text without outputting it to stdout
	 *
	 * @category Text
	 * @param t text to format
	 * @param options formatting options
	 */
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

	/**
	 * Formats text and outputs it to stdout
	 *
	 * @category Text
	 * @param t text to display
	 * @param options formatting options
	 */
	text(t: string, options?: TextFormatOptions) {
		this.stdout.write(this.format(t, options));

		return this;
	}

	// Shortcodes for fg color
	black(t: string) { return this.text(t, { fg: 'black' }); }
	red(t: string) { return this.text(t, { fg: 'red' }); }
	green(t: string) { return this.text(t, { fg: 'green' }); }
	yellow(t: string) { return this.text(t, { fg: 'yellow' }); }
	blue(t: string) { return this.text(t, { fg: 'blue' }); }
	magenta(t: string) { return this.text(t, { fg: 'magenta' }); }
	cyan(t: string) { return this.text(t, { fg: 'cyan' }); }
	white(t: string) { return this.text(t, { fg: 'white' }); }
	dim(t: string) { return this.text(t, { dim: true }); }
	bright(t: string) { return this.text(t, { bright: true }); }

	// Shortcodes for bg color
	bgBlack(t: string) { return this.text(t, { bg: 'black' }); }
	bgRed(t: string) { return this.text(t, { bg: 'red' }); }
	bgGreen(t: string) { return this.text(t, { bg: 'green' }); }
	bgYellow(t: string) { return this.text(t, { bg: 'yellow' }); }
	bgBlue(t: string) { return this.text(t, { bg: 'blue' }); }
	bgMagenta(t: string) { return this.text(t, { bg: 'magenta' }); }
	bgCyan(t: string) { return this.text(t, { bg: 'cyan' }); }
	bgWhite(t: string) { return this.text(t, { bg: 'white' }); }

	/**
	 * Outputs a single space
	 * @category Text
	 */
	space() {
		return this.text(' ');
	}

	/**
	 * Outputs a newline character \n
	 * @category Text
	 */
	newline() {
		this.stdout.write('\n');

		return this;
	}

	/**
	 * Clears the terminal
	 * @category Terminal Control
	 */
	clear() {
		this.stdout.write(this.codes.clear);
	}

	/**
	 * Clears the line
	 *
	 * @category Terminal Control
	 * @param dir
	 */
	clearLine(dir: Direction = 1) {
		clearLine(this.stdout, dir);
	}

	/**
	 * Moves cursor to absolute position
	 *
	 * @category Terminal Control
	 * @param x
	 * @param y
	 */
	cursorTo(x: number, y?: number) {
		cursorTo(this.stdout, x, y);
	}

	/**
	 * Moves cursor to relative position
	 *
	 * @category Terminal Control
	 * @param dx
	 * @param dy
	 */
	moveTo(dx: number, dy?: number) {
		moveCursor(this.stdout, dx, dy);
	}

	/**
	 * Hides cursor
	 * @category Terminal Control
	 */
	hideCursor() {
		this.stdout.write('\x1B[?25l');
	}

	/**
	 * Shows cursor
	 * @category Terminal Control
	 */
	showCursor() {
		this.stdout.write('\x1B[?25h');
	}

	/**
	 * Puts terminal in raw mode or disables raw mode, only TTY terminals supported
	 *
	 * @category Terminal Control
	 * @param raw
	 */
	setRawMode(raw: boolean) {
		if (this.stdin.isTTY) {
			this.stdin.setRawMode(raw);
		}
	}

	/**
	 * Gets cursor position, not every terminal is supported, better to not rely on this as from test
	 * It can be inconsistent
	 * @category Terminal Control
	 */
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