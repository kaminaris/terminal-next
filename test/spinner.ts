import { Spinner }     from '../src/Spinner';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	t.clear();

	const spinner = new Spinner(t, 'test');
	setTimeout(async ()=> {
		await spinner.setText('new text');
	}, 1000);
	const itv = setInterval(async () => {
		await spinner.draw();
	}, 100);
	setTimeout(()=> {
		clearInterval(itv);
	}, 3000);

})();
