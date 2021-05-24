import { Table }       from '../src/Table';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	t.clear();

	const data = [
		['id', 'name', 'email', 'active', 'banned'],
		['1', 'Marian', 'mtest@tst.com', 'true', 'false'],
		['2', 'Adam', 'adam@gmail.com', 'true', 'true'],
		['3', 'Gertruda', 'g.rtruda@wp.pl', 'false', 'false'],
	]
	const table = new Table(t);
	table.setData(data);
	table.draw();
})();
