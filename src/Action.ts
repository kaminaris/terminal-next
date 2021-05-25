export class Action {
	static actionName(key) {
		if (key.meta && key.name !== 'escape') {
			return false;
		}

		if (key.ctrl) {
			if (key.name === 'a') {
				return 'first';
			}
			if (key.name === 'c') {
				return 'abort';
			}
			if (key.name === 'd') {
				return 'abort';
			}
			if (key.name === 'e') {
				return 'last';
			}
			if (key.name === 'g') {
				return 'reset';
			}
		}

		switch (key.name) {
			case 'enter': return 'return'; // ctrl + J
			case 'return':
			case 'backspace':
			case 'delete':
			case 'abort':
			case 'escape':
			case 'tab':
			case 'pagedown':
			case 'pageup':
			case 'home':
			case 'end':
			case 'down':
			case 'right':
			case 'left':
			case 'up': return key.name;
			default: return false;
		}
	}
}