import { Terminal } from './Terminal';
export declare abstract class Widget {
    protected terminal: Terminal;
    styles: {
        [name: string]: any;
    };
    style: string;
    indent: number;
    constructor(terminal: Terminal);
    get styleDef(): any;
    setStyle(style: string): void;
    addStyle(name: string, style: any): void;
    abstract draw(): any;
}
