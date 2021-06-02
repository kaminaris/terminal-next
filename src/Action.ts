import { Key } from 'readline';

/**
 * Simple class used to determine if key press was action or just a normal key
 */
export class Action {
	/**
	 * Determine if key is action, if so, return normalized action name
	 *
	 * @param key
	 */
	static actionName(key: Key) {
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