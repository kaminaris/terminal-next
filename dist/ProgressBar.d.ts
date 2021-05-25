import { Terminal } from './Terminal';
export declare class ProgressBar {
    protected terminal: Terminal;
    protected max: number;
    protected progress: number;
    protected width: number;
    protected text: string;
    protected style: string;
    styles: {
        [name: string]: any;
    };
    indent: number;
    startChar: string;
    endChar: string;
    constructor(terminal: Terminal, max: number, progress?: number, width?: number, text?: string, style?: string);
    get styleDef(): any;
    setStyle(style: string): this;
    calculateProgress(): number;
    draw(): Promise<void>;
    setProgress(progress: number): Promise<this>;
}
