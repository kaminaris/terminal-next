import { Codes }                                            from './Codes';
import { TextFormatOptions }                                from './Interface/TextFormatOptions';
import { ReadStream, WriteStream }                          from 'tty';
import * as tty                                             from 'tty';
import { createInterface, clearLine, cursorTo, moveCursor, emitKeypressEvents  } from 'readline';

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

	clearLine() {
		clearLine(this.stdout, 1);
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
				const match = /\[(\d+)\;(\d+)R$/.exec(b.toString());
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

	input(): Promise<string> {
		if (!this.stdin) {
			throw new Error('STDIN has not been set');
		}

		//this.stdin.on('data', this.onStdinData.bind(this));
		const rl = createInterface(this.stdin, this.stdout);

		return new Promise((resolve) => {
			rl.on('line', (a: string) => {
				resolve(a);
				rl.close();
			});
		});
	}

	question(q: string, options?: TextFormatOptions): Promise<string> {
		this.text(q, options).space();
		return this.input();
	}

	prependStdinChunk: Uint8Array;

	onStdinData(b: Buffer) {
		// let i, j, buffer, startBuffer, char, codepoint,
		// 	keymapCode, keymapStartCode, keymap, keymapList,
		// 	regexp, matches, bytes, found, handlerResult,
		// 	accumulate = false,
		// 	index = 0, ;
		//
		// // if ( this.shutdown ) { return ; }
		//
		let chunk = this.prependStdinChunk ? Buffer.concat([this.prependStdinChunk, b]) : b;

		const length = b.length;
		// while (index < length) {
		// 	found = false;
		// 	bytes = 1;
		//
		// 	if (chunk[index] <= 0x1f || chunk[index] === 0x7f) {
		// 		// Those are ASCII control character and DEL key
		//
		// 		for (i = Math.min(length, Math.max(this.rKeymapMaxSize, this.rKeymapStarterMaxSize)); i > 0; i--) {
		// 			buffer = chunk.slice(index);
		// 			keymapCode = buffer.toString();
		// 			startBuffer = chunk.slice(index, index + i);
		// 			keymapStartCode = startBuffer.toString();
		//
		// 			if (this.rKeymap[i] && this.rKeymap[i][keymapStartCode]) {
		// 				// First test fixed sequences
		//
		// 				keymap = this.rKeymap[i][keymapStartCode];
		// 				found = true;
		//
		// 				if (keymap.handler) {
		// 					handlerResult = keymap.handler.call(this, keymap.name, chunk.slice(index + i));
		// 					bytes = i + handlerResult.eaten;
		//
		// 					if (!handlerResult.disable) {
		// 						this.emit(keymap.event, handlerResult.name, handlerResult.data);
		// 					}
		// 				}
		// 				else if (keymap.event) {
		// 					bytes = i;
		// 					this.emit(keymap.event, keymap.name, keymap.data, { code: startBuffer });
		// 				}
		// 				else {
		// 					bytes = i;
		// 					this.emit('key', keymap.name, keymap.matches, { isCharacter: false, code: startBuffer
		// });
		// 				}
		//
		// 				break;
		// 			}
		// 			else if (this.rKeymapStarter[i] && this.rKeymapStarter[i][keymapStartCode]) {
		// 				// Then test pattern sequences
		//
		// 				keymapList = this.rKeymapStarter[i][keymapStartCode];
		//
		// 				//console.log( 'for i:' , keymapList ) ;
		//
		// 				for (j = 0; j < keymapList.length; j++) {
		// 					keymap = keymapList[j];
		//
		// 					if (keymap.altEnder) {
		// 						regexp = '^' +
		// 							string.escape.regExp(keymap.starter) +
		// 							'([ -~]*?)' +	// [ -~] match only all ASCII non-control character
		// 							'(' + string.escape.regExp(keymap.ender) + '|' + string.escape.regExp(
		// 								keymap.altEnder) + ')';
		// 					}
		// 					else {
		// 						regexp = '^' +
		// 							string.escape.regExp(keymap.starter) +
		// 							'([ -~]*?)' +	// [ -~] match only all ASCII non-control character
		// 							string.escape.regExp(keymap.ender);
		// 					}
		//
		// 					matches = keymapCode.match(new RegExp(regexp), 'g');
		//
		// 					//console.log( 'for j:' , keymap , regexp , matches ) ;
		//
		// 					if (matches) {
		// 						found = true;
		//
		// 						handlerResult = keymap.handler.call(this, keymap.name, matches[1]);
		// 						bytes = matches[0].length;
		// 						this.emit(keymap.event, handlerResult.name, handlerResult.data);
		//
		// 						break;
		// 					}
		// 					else if (keymap.accumulate) {
		// 						found = true;
		// 						accumulate = true;
		// 						break;
		// 					}
		// 				}
		//
		// 				if (found) {
		// 					break;
		// 				}
		// 			}
		// 		}
		//
		// 		// Nothing was found, so to not emit trash, we just abort the current buffer processing
		// 		if (!found) {
		// 			this.emit('unknown', chunk);
		// 			break;
		// 		}
		// 	}
		// 	else if (chunk[index] >= 0x80) {
		// 		// Unicode bytes per char guessing
		// 		if (chunk[index] < 0xc0) {
		// 			continue;
		// 		}	// We are in a middle of an unicode multibyte sequence... Something fails somewhere, we will
		// just // continue for now... else if (chunk[index] < 0xe0) { bytes = 2; } else if (chunk[index] < 0xf0) {
		// bytes = 3; } else if (chunk[index] < 0xf8) { bytes = 4; } else if (chunk[index] < 0xfc) { bytes = 5; } else
		// { bytes = 6; }  buffer = chunk.slice(index, index + bytes); char = buffer.toString('utf8');  //if ( bytes >
		// 2 ) { codepoint = punycode.ucs2.decode( char )[ 0 ] ; } if (bytes > 2) { codepoint =
		// string.unicode.firstCodePoint(char); } else { codepoint = char.charCodeAt(0); }  this.emit('key', char,
		// [char], { isCharacter: true, codepoint: codepoint, code: buffer }); } else { // Standard ASCII char =
		// String.fromCharCode(chunk[index]); this.emit('key', char, [char], { isCharacter: true, codepoint:
		// chunk[index], code: chunk[index] }); }  index += bytes; }  if (accumulate) { this.prependStdinChunk = chunk;
		// } else { this.prependStdinChunk = null; }
	}
}