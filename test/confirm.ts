import { Confirm }   from '../src/Confirm';
import { Terminal }  from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {

	const ti = new Confirm(t, 'Super?');
	const answ = await ti.start();
	t.text(answ.toString()).newline();

	const ti2 = new Confirm(t, 'nodef?', false);
	const answ2 = await ti2.start();
	t.text(answ2.toString()).newline();

	const ti3 = new Confirm(t, 'custom?', true, 'a', 'b');
	const answ3 = await ti3.start();
	t.text(answ3.toString()).newline();

})();
