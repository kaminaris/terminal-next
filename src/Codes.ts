import { Color } from './Interface/Color';

export type ColorCodeType = 'foreground' | 'background';

/**
 * Class that is used to group special terminal ansi codes, if you want to have support for custom codes,
 * extend this class and override it in terminal like this:
 *
 * ```ts
 * const t = new Terminal();
 * t.codes = yourCustomCodesClassInstance;
 * ```
 */
export class Codes {
	clear = '\x1Bc';
	reset = '\x1b[0m';
	bright = '\x1b[1m';
	dim = '\x1b[2m';
	underscore = '\x1b[4m';
	blink = '\x1b[5m';
	reverse = '\x1b[7m';
	hidden = '\x1b[8m';

	fullForeground = '\x1b[38;5;';
	fullBackground = '\x1b[48;5;';

	foreground = new Map<string, string>([
		['black', '\x1b[30m'],
		['red', '\x1b[31m'],
		['green', '\x1b[32m'],
		['yellow', '\x1b[33m'],
		['blue', '\x1b[34m'],
		['magenta', '\x1b[35m'],
		['cyan', '\x1b[36m'],
		['white', '\x1b[37m']
	]);

	background = new Map<string, string>([
		['black', '\x1b[40m'],
		['red', '\x1b[41m'],
		['green', '\x1b[42m'],
		['yellow', '\x1b[43m'],
		['blue', '\x1b[44m'],
		['magenta', '\x1b[45m'],
		['cyan', '\x1b[46m'],
		['white', '\x1b[47m']
	]);

	/**
	 * Gets the color code for color name
	 *
	 * @param type either 'foreground' or 'background'
	 * @param name color name or rgb code
	 */
	getColorCode(type: ColorCodeType, name: string | Color) {
		return typeof name === 'string' ? this[type].get(name) : this.getRgbCode(type, name);
	}

	/**
	 * Adds the color to palette
	 *
	 * @param type either 'foreground' or 'background'
	 * @param name color name
	 * @param code color code or rgb code
	 */
	addColor(type: ColorCodeType, name: string, code: string | Color) {
		this[type].set(name, typeof code === 'string' ? code : this.getRgbCode(type, code));

		return this;
	}

	/**
	 * Gets the code for RGB color
	 *
	 * @param type either 'foreground' or 'background'
	 * @param code color code or rgb code
	 */
	getRgbCode(type: ColorCodeType, code: Color) {
		const index = 16 + 36 * code.r + 6 * code.g + code.b;
		if (type === 'foreground') {
			return this.fullForeground + index + 'm';
		}

		return this.fullBackground + index + 'm';
	}
}