import { Terminal }    from '../src/Terminal';

const t = new Terminal(process.stdout, process.stdin);

(async () => {
	// t.clear();

	// t.moveTo(15, 0);
	let pos = {x: 0, y: 2}
	pos = await t.getCursor();
	t.text(`x1: ${pos.x} y: ${pos.y}`, {fg: 'cyan'})
	//
	// t.moveTo(15, 5);
	// pos = await t.getCursor();
	// t.text(`x2: ${pos.x} y: ${pos.y}`)
	//
	// t.cursorTo(30, 1);
	// pos = await t.getCursor();
	// t.text(`x3: ${pos.x} y: ${pos.y}`)
	//
	// t.cursorTo(0, 0);
	// pos = await t.getCursor();
	// t.text(`x4: ${pos.x} y: ${pos.y}`)
	//
	// t.cursorTo(0, 1);
	// pos = await t.getCursor();
	// t.text(`x5: ${pos.x} y: ${pos.y}`)
	//
	// t.cursorTo(30, 10);
})();
