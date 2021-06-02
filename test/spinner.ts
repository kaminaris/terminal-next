import { Spinner }     from '../src/Spinner';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	t.clear();

	const spinner = new Spinner(t, 'test');
	setTimeout(()=> {
		spinner.setText('new text');
	}, 1000);
	const itv = setInterval(() => {
		spinner.draw();
	}, 100);
	setTimeout(()=> {
		clearInterval(itv);
		// important, in order to stop terminal from flickering,
		// show cursor after this is done
		t.showCursor();
	}, 3000);


})();
