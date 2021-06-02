import { Select }      from '../src/Select';
import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	const options = [
		{title: 'Option 1', value: '111'},
		{title: 'Option 2', value: '222'},
		{title: 'Some other option', value: '333'},
	];
	const select = new Select(t, options);
	const result = await select.start();
	t.text('answer: ' + result);
})();
