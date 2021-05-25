import { TextInput } from '../src/TextInput';
import { Terminal }  from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {

	const ti = new TextInput(t, 'Your name?');
	const answ = await ti.start();
	t.text(answ);

})();
