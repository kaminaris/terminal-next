import * as os   from 'os';
import * as path from 'path';

export class TerminalKit {
	static guessTerminal(unpipe: boolean = false) {
		let envVar, version;

		const isSSH = !!process.env.SSH_CONNECTION;
		const isTTY = !!process.stdout.isTTY;

		if (!isTTY && !unpipe) {
			return {
				isTTY: isTTY,
				isSSH: isSSH,
				appId: 'none',
				safe: true,
				generic: 'none'
			};
		}

		const platform = os.platform();
		const t256color = (process.env.TERM && process.env.TERM.match(/256/)) ||
			(process.env.COLORTERM && process.env.COLORTERM.match(/256/));
		const tTrueColor = process.env.COLORTERM && process.env.COLORTERM.match(/^(truecolor|24bits?)$/);

		let appId =
			(process.env.COLORTERM && !tTrueColor ? process.env.COLORTERM :
			 process.env.TERM_PROGRAM ? process.env.TERM_PROGRAM :
			 process.env.TERM) as string;

		if (platform === 'darwin') {
			appId = path.parse(appId).name;
		}

		// safe is true if we are sure about our guess
		let safe =
			appId !== process.env.TERM
			|| (process.env.TERM && process.env.TERM !== 'xterm' && process.env.TERM !== 'xterm-256color');

		let generic = appId;

		switch (appId) {
			case 'xterm' :
			case 'xterm-256color' :
				if (safe) {
					break;
				}

				if (tTrueColor) {
					appId = generic = 'xterm-truecolor';
				}

				// Many terminal advertise them as xterm, we will try to guess some of them here,
				// using environment variable
				if (process.env.VTE_VERSION) {
					version = parseInt(process.env.VTE_VERSION, 10);

					if (version >= 3803) {
						appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome';
						safe = true;
						break;
					}
				}

				// BTW OSX terminals advertise them as xterm, while having their own key mapping...
				if (platform === 'darwin') {
					appId = 'osx-256color';
					break;
				}

				for (envVar in process.env) {
					if (envVar.match(/KONSOLE/)) {
						appId = t256color || tTrueColor ? 'konsole-256color' : 'konsole';
						safe = true;
						break;
					}
				}

				break;

			case 'linux' :
			case 'aterm' :
			case 'kuake' :
			case 'tilda' :
			case 'terminology' :
			case 'wterm' :
			case 'mrxvt' :
				break;

			case 'gnome' :
			case 'gnome-256color' :
			case 'gnome-terminal' :
			case 'gnome-terminal-256color' :
			case 'terminator' :	// it uses gnome terminal lib
			case 'guake' :	// same here
				appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome';
				break;
			case 'konsole' :
				appId = t256color || tTrueColor ? 'konsole-256color' : 'konsole';
				break;
			case 'rxvt' :
			case 'rxvt-xpm' :
			case 'rxvt-unicode-256color' :
			case 'urxvt256c' :
			case 'urxvt256c-ml' :
			case 'rxvt-unicode' :
			case 'urxvt' :
			case 'urxvt-ml' :
				if (process.env.TERM === 'rxvt') {
					appId = 'rxvt-256color';
				}
				else {
					appId = t256color || tTrueColor ? 'rxvt-256color' : 'rxvt';
				}
				break;
			case 'xfce' :
			case 'xfce-terminal' :
			case 'xfce4-terminal' :
				appId = 'xfce';
				break;
			case 'eterm' :
			case 'Eterm' :
				appId = t256color || tTrueColor ? 'eterm-256color' : 'eterm';
				break;
			case 'atomic-terminal' :
				appId = 'atomic-terminal';
				break;
			case 'xterm-kitty' :
			case 'kitty' :
				appId = 'kitty';
				break;

			// OSX Terminals

			case 'iTerm' :
			case 'iterm' :
			case 'iTerm2' :
			case 'iterm2' :
			case 'Terminal' :
			case 'terminal' :
			case 'Apple_Terminal' :
				appId = 'osx-256color';
				break;

			default :
				if (!appId) {
					generic = 'unknown';
				}
				else {
					generic = appId = generic.toLowerCase();
				}
				break;
		}

		return {
			isTTY, isSSH, appId, safe, generic: safe ? appId : generic
		};
	}

	static get terminal() {
		const guessed = TerminalKit.guessTerminal();
		return TerminalKit.createTerminal({
			stdin: process.stdin,
			stdout: process.stdout,
			stderr: process.stderr,
			generic: guessed.generic || 'unknown',
			appId: guessed.safe ? guessed.appId : undefined,
			//	appName: guessed.safe ? guessed.appName : undefined ,
			isTTY: guessed.isTTY,
			isSSH: guessed.isSSH,
			processSigwinch: true,
			preferProcessSigwinch: !!TerminalKit.globalConfig.preferProcessSigwinch
		});
	}

	static get realTerminal() {
		const guessed = termkit.guessTerminal(true);
		const input = termkit.tty.getInput();
		const output = termkit.tty.getOutput();

		return termkit.createTerminal({
			stdin: input,
			stdout: output,
			stderr: process.stderr,
			generic: guessed.generic || 'unknown',
			appId: guessed.safe ? guessed.appId : undefined,
			//	appName: guessed.safe ? guessed.appName : undefined ,
			isTTY: true,
			isSSH: guessed.isSSH,
			processSigwinch: true,
			preferProcessSigwinch: !!termkit.globalConfig.preferProcessSigwinch
		});
	};

	static hexToRgba(hex: string) {
		// Strip the # if necessary
		if (hex[0] === '#') {
			hex = hex.slice(1);
		}

		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}

		return {
			r: parseInt(hex.slice(0, 2), 16),
			g: parseInt(hex.slice(2, 4), 16),
			b: parseInt(hex.slice(4, 6), 16),
			a: hex.length > 6 ? parseInt(hex.slice(6, 8), 16) : 255
		};
	} ;
}