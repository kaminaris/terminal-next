import { Color } from './Interface/Color';

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

	getColorCode(type: 'foreground' | 'background', name: string | Color) {
		return typeof name === 'string' ? this[type].get(name) : this.getRgbCode(type, name);
	}

	addColor(type: 'foreground' | 'background', name: string, code: string | Color) {
		this[type].set(name, typeof code === 'string' ? code : this.getRgbCode(type, code));

		return this;
	}

	getRgbCode(type: 'foreground' | 'background', code: Color) {
		const index = 16 + 36 * code.r + 6 * code.g + code.b;
		if (type === 'foreground') {
			return this.fullForeground + index + 'm';
		}

		return this.fullBackground + index + 'm';
	}
}