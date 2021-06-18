import { TextFormatOptions } from './Interface/TextFormatOptions';
import { Terminal } from './Terminal';
import { Widget } from './Widget';
/**
 * Internal table row class
 */
export declare class TableRow {
    cells: TableCell[];
    isLast: boolean;
    isFirst: boolean;
    setCells(cells: any[]): void;
}
/**
 * Internal table cell class
 */
export declare class TableCell {
    width: number;
    maxWidth: number;
    isLast: boolean;
    isFirst: boolean;
    data: string;
    constructor(data: any);
}
/**
 * Main table widget, example usage:
 *
 * ![](https://i.imgur.com/6VAWTJo.png)
 *
 * ```ts
 * const data = [
 * 	['id', 'name', 'email', 'active', 'banned'],
 * 	['1', 'Marian', 'mtest@tst.com', 'true', 'false'],
 * 	['2', 'Adam', 'adam@gmail.com', 'true', 'true'],
 * 	['3', 'Gertruda', 'g.rtruda@wp.pl', 'false', 'false']
 * ];
 * const table = new Table(t);
 * table.setData(data);
 * table.draw();
 * ```
 */
export declare class Table extends Widget {
    protected maxWidth: boolean;
    /**
     * Table has pretty advanced styles, open up the class if you wish to define style yourself
     */
    styles: {
        default: {
            lt: string;
            rt: string;
            t: string;
            tc: string;
            l: string;
            m: string;
            r: string;
            line: string;
            lc: string;
            c: string;
            rc: string;
            lb: string;
            rb: string;
            bc: string;
            b: string;
        };
    };
    /**
     * Internal table rows, you can technically set this yourself however you will need to properly construct
     * TableRow
     */
    rows: TableRow[];
    headerTextStyle: TextFormatOptions;
    textStyle: TextFormatOptions;
    /**
     * Creates table widget
     *
     * @param terminal {@link Terminal} instance
     * @param maxWidth should table not expand after maximum terminal width [NYI]
     */
    constructor(terminal: Terminal, maxWidth?: boolean);
    /**
     * Set header text style
     *
     * @param style
     */
    setHeaderTextStyle(style: TextFormatOptions): void;
    /**
     * Sets content text style
     * @param style
     */
    setTextStyle(style: TextFormatOptions): void;
    /**
     * Sets the data for table, first row will be treated as header
     *
     * @param data
     */
    setData(data: any[][]): this;
    /**
     * Recalculate widths of columns
     */
    calcWidths(): void;
    /**
     * Draw the row
     *
     * @internal
     */
    protected drawRow(row: TableRow, leftChar: string, rightChar: string, middleChar: string): void;
    /**
     * Draw divider
     *
     * @internal
     */
    protected drawDivider(row: TableRow, leftChar: string, rightChar: string, middleChar: string, fill: string): void;
    /**
     * Draws the table
     */
    draw(): this;
}
