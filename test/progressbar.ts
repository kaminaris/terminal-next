import { Table }       from '../src/Table';
import { ProgressBar } from '../src/ProgressBar';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	// t.clear();

	const pb = new ProgressBar(t, 100);
	await pb.draw();
	let prog = 0;
	const itv = setInterval(async () => {
		await pb.setProgress(prog);
		prog++;
		if (prog > 100) {
			clearInterval(itv);
		}
	}, 50);

})();
