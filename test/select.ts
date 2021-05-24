import { Select }      from '../src/Select';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	const options = [
		{title: 'test something', value: '123'},
		{title: 'test something else', value: '111'},
		{title: '1231231 sa da ', value: '12333'},
	]
	const select = new Select(t, options);
	const result = await select.start();
	t.text('answer: ' + result);
})();
