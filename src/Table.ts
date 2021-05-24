import { TextFormatOptions } from './Interface/TextFormatOptions';
import { Terminal }          from './Terminal';
import { Widget }            from './Widget';

export class TableRow {
	cells: TableCell[] = [];
	isLast: boolean;
	isFirst: boolean;

	setCells(cells: any[]) {
		for (let i = 0; i < cells.length; i++) {
			const tc = new TableCell(cells[i]);
			tc.isFirst = i === 0;
			tc.isLast = i === cells.length - 1;

			this.cells.push(tc);
		}
	}
}

export class TableCell {
	width: number;
	maxWidth: number;
	isLast: boolean;
	isFirst: boolean;

	constructor(public data: string) {}
}

export class Table extends Widget {
	styles = {
		default: {
			lt: '┌',
			rt: '┐',
			t: '─',
			tc: '┬',

			l: '│',
			m: '│',
			r: '│',
			line: '─',

			lc: '├',
			c: '┼',
			rc: '┤',

			lb: '└',
			rb: '┘',
			bc: '┴',
			b: '─'
		}
	};

	rows: TableRow[] = [];
	headerTextStyle: TextFormatOptions = {bright: true, fg: 'cyan'};
	textStyle: TextFormatOptions = {dim: true};

	constructor(
		terminal: Terminal,
		protected maxWidth = false
	) {
		super(terminal);
	}

	setHeaderTextStyle(style: TextFormatOptions) {
		this.headerTextStyle = style;
	}

	setTextStyle(style: TextFormatOptions) {
		this.textStyle = style;
	}

	setData(data: any[][]) {
		const rows: TableRow[] = [];

		for (let rowI = 0; rowI < data.length; rowI++) {
			const row = new TableRow();
			row.setCells(data[rowI]);
			row.isFirst = rowI === 0;
			row.isLast = rowI === data.length - 1;
			rows.push(row);
		}

		this.rows = rows;
		this.calcWidths();
		return this;
	}

	calcWidths() {
		const colMaxWidths: number[] = [];
		for (const row of this.rows) {
			for (let i = 0; i < row.cells.length; i++) {
				const cell = row.cells[i];
				const l = cell.data.length < 1 ? 1 : cell.data.length + 2;
				if (!colMaxWidths[i] || colMaxWidths[i] < l) {
					colMaxWidths[i] = l;
				}
			}
		}

		for (const row of this.rows) {
			for (let i = 0; i < row.cells.length; i++) {
				const cell = row.cells[i];
				cell.maxWidth = colMaxWidths[i];
			}
		}
	}

	protected drawRow(row: TableRow, leftChar: string, rightChar: string, middleChar: string) {
		for (const cell of row.cells) {
			if (cell.isFirst) {
				this.terminal.text(leftChar);
			}

			this.terminal
				.space()
				.text(cell.data, row.isFirst ? this.headerTextStyle : this.textStyle)
				.text(' '.repeat(cell.maxWidth - cell.data.length - 2))
				.space()
			;

			if (cell.isLast) {
				this.terminal.text(rightChar).newline();
			}
			else {
				this.terminal.text(middleChar);
			}
		}
	}

	protected drawDivider(row: TableRow, leftChar: string, rightChar: string, middleChar: string, fill: string) {
		for (const cell of row.cells) {
			if (cell.isFirst) {
				this.terminal.text(leftChar);
			}

			this.terminal.text(fill.repeat(cell.maxWidth));

			if (cell.isLast) {
				this.terminal.text(rightChar).newline();
			}
			else {
				this.terminal.text(middleChar);
			}
		}
	}

	draw() {
		const style = this.styleDef;

		for (const row of this.rows) {
			if (row.isFirst) {
				this.drawDivider(row, style.lt, style.rt, style.tc, style.t);
			}

			this.drawRow(row, style.l, style.r, style.m);

			if (row.isFirst) {
				this.drawDivider(row, style.lc, style.rc, style.c, style.line);
			}

			if (row.isLast) {
				this.drawDivider(row, style.lb, style.rb, style.bc, style.b);
			}
		}
		return this;
	}

}