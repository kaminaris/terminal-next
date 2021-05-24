import { Table }       from '../src/Table';
import { ProgressBar } from '../src/ProgressBar';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	t.clear();
	// t.text('red', { fg: 'red' }).newline();
	// t.text('red', { fg: 'red', bright: true }).newline();
	// t.text('red bg', { bg: 'red' }).newline();
	// t.text('red bg bright', { bg: 'red', bright: true }).newline();
	// t.text('red bg white text', { bg: 'red', fg: 'blue' }).newline();
	// const spinner = t.spinner(100, 'test');
	// setTimeout(()=> {spinner.setText('new text');}, 3000);
	// setTimeout(()=> {spinner.stop()}, 6000);

	// const pb = new ProgressBar(t, 100);
	// pb.draw();
	// let prog = 0;
	// const itv = setInterval(()=> {pb.setProgress(prog); prog++; if (prog > 100) {clearInterval(itv)}}, 50);

	// const a = await t.question('wot?');
	//
	// t.text('a:', { fg: 'cyan' }).space().text(a);
	// t.newline();
	// const a1 = await t.question('m8?');
	// t.text('a1:', { fg: 'cyan' }).space().text(a1);
	// t.moveTo(5, 7);
	// t.showCursor();



	// await t.moveTo(15, 0);
	// let pos = {x: 0, y: 2}
	// pos = await t.getCursor();
	// t.text(`x: ${pos.x} y: ${pos.y}`)
	//
	// await t.moveTo(15, 5);
	// pos = await t.getCursor();
	// t.text(`x: ${pos.x} y: ${pos.y}`)
	//
	// await t.cursorTo(30, 1);
	// pos = await t.getCursor();
	// t.text(`x: ${pos.x} y: ${pos.y}`)
	//
	// await t.cursorTo(1, 1);
	// pos = await t.getCursor();
	// t.text(`x: ${pos.x} y: ${pos.y}`)
	//
	// await t.cursorTo(30, 10);

	const data = [
		['id', 'name', 'email', 'active', 'banned'],
		['1', 'Marian', 'mtest@tst.com', 'true', 'false'],
		['2', 'Adam', 'adam@gmail.com', 'true', 'true'],
		['3', 'Gertruda', 'g.rtruda@wp.pl', 'false', 'false'],
	]
	const table = new Table(t);
	table.setData(data);
	table.draw();

	// console.log(t.format('bbbb', {fg: 'Blue'}));
	// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
	// process.stdout.write('\x1b[35mzzzzzz\x1b[0m')
})();
