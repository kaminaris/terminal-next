import { TextFormatOptions } from './Interface/TextFormatOptions';
import { Terminal } from './Terminal';
import { Widget } from './Widget';
export declare class TableRow {
    cells: TableCell[];
    isLast: boolean;
    isFirst: boolean;
    setCells(cells: any[]): void;
}
export declare class TableCell {
    data: string;
    width: number;
    maxWidth: number;
    isLast: boolean;
    isFirst: boolean;
    constructor(data: string);
}
export declare class Table extends Widget {
    protected maxWidth: boolean;
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
    rows: TableRow[];
    headerTextStyle: TextFormatOptions;
    textStyle: TextFormatOptions;
    constructor(terminal: Terminal, maxWidth?: boolean);
    setHeaderTextStyle(style: TextFormatOptions): void;
    setTextStyle(style: TextFormatOptions): void;
    setData(data: any[][]): this;
    calcWidths(): void;
    protected drawRow(row: TableRow, leftChar: string, rightChar: string, middleChar: string): void;
    protected drawDivider(row: TableRow, leftChar: string, rightChar: string, middleChar: string, fill: string): void;
    draw(): this;
}
