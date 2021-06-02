terminal-next / [Exports](modules.md)

# Terminal Next

---
Next gen terminal helper, slim, extensible, easy to use.
Fully promise based, callbacks are not a thing anymore.
Some widgets do not support non-tty terminals.

Zero dependencies.

![npm](https://img.shields.io/npm/v/terminal-next)
![node-current](https://img.shields.io/node/v/terminal-next)
---

## Requirements

Node v14+, cannot run in browser

---

## Docs

[Read documentation here](https://github.com/kaminaris/terminal-next/blob/master/docs/modules.md)

---

## Installation

For yarn:

```
yarn add terminal-next
```

For npm:

```
npm i terminal-next
```

---
## Basic usage:

### [Examples can be found here](https://github.com/kaminaris/terminal-next/tree/master/test)
either compile them or use [ts-node](https://www.npmjs.com/package/ts-node) to execute immediately

![](https://i.imgur.com/v7PUSSt.png)

```ts
import { Terminal }    from 'terminal-next';

// optionally pass stdin and/or stdout, if not provided
// process.stdin and process.stdout will be used
const t = new Terminal();

t.red('Red text').newline();

// fully customizable text output
t.text('Some text', {fg: 'cyan', bg: 'red', dim: true});
```
---
## TextInput

Typical text input prompt

![](https://i.imgur.com/ikCwe6n.png)

```ts
import { Terminal, TextInput }    from 'terminal-next';
const t = new Terminal();

// you can use promises instead of await
(async () => {
	const ti = new TextInput(t, 'Your name?');
	const answ = await ti.start();
	t.text(answ);
})();
```
---

## Confirm

Simple yes/no confirmation

![](https://i.imgur.com/1k79D8K.png)

```ts
import { Terminal, Confirm }    from 'terminal-next';
const t = new Terminal();

(async () => {
	const ti = new Confirm(t, 'Super?');
	const answ = await ti.start();
	t.text(answ.toString()).newline();
})();
```
---

## Select

Single option select widget

![](https://i.imgur.com/PUwIYkG.gif)

```ts
import { Terminal, Select }    from 'terminal-next';
const t = new Terminal();

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
```
---

## Spinner

Spinner with a text

![](https://i.imgur.com/3wYKaNZ.gif)

```ts
import { Terminal, Spinner }    from 'terminal-next';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	const spinner = new Spinner(t, 'test');
	// you define tick rate yourself or just tick whenever a progress is made
	const itv = setInterval(async () => {
		await spinner.draw();
	}, 100);

	setTimeout(()=> {
		clearInterval(itv);
	}, 3000);
})();
```
---

## ProgressBar

![](https://i.imgur.com/IYDxWBa.gif)

```ts
import { Terminal, ProgressBar }    from 'terminal-next';

const t = new Terminal();

(async () => {
	const pb = new ProgressBar(t, 100);
	await pb.draw();

	let prog = 0;
	const itv = setInterval(async () => {
		await pb.setProgress(prog);
		prog++;
		if (prog > 100) {
			clearInterval(itv);
			// important, in order to stop terminal from flickering, 
			// show cursor after this is done
			t.showCursor();
		}
	}, 50);
})();
```
---

## Table

![](https://i.imgur.com/6VAWTJo.png)

```ts
import { Terminal, Table }    from 'terminal-next';

const t = new Terminal();

(async () => {
	t.clear();

	const data = [
		['id', 'name', 'email', 'active', 'banned'],
		['1', 'Marian', 'mtest@tst.com', 'true', 'false'],
		['2', 'Adam', 'adam@gmail.com', 'true', 'true'],
		['3', 'Gertruda', 'g.rtruda@wp.pl', 'false', 'false']
	];
	const table = new Table(t);
	table.setData(data);
	table.draw();
})();
```

---

## More widgets?
You can either construct them yourself or make PR if you think there is a widget that is really important to have.
Either way, create issue in this project.
