import { Table }       from '../src/Table';
import { ProgressBar } from '../src/ProgressBar';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	t.clear();

	t.text('red', { fg: 'red' }).newline();
	t.text('red bright', { fg: 'red', bright: true }).newline();
	t.text('red bg', { bg: 'red' }).newline();
	t.text('red bg bright', { bg: 'red', bright: true }).newline();
	t.text('red bg blue text', { bg: 'red', fg: 'blue' }).newline();

	//redShade
	const x = ['r', 'g', 'b'];
	for (const c of x) {
		for (let i = 0; i < 6; i++) {
			const color = { r: 0, g: 0, b: 0 };
			color[c] = i;
			t.text(c + ': ' + i, { bg: color });
		}
		t.newline();

	}

})();
