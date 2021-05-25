import { Terminal } from './Terminal';
import { Widget } from './Widget';
export interface SelectOption {
    title: string;
    value: any;
    selected?: boolean;
}
export declare class Select extends Widget {
    options: SelectOption[];
    protected firstDraw: boolean;
    constructor(terminal: Terminal, options: SelectOption[]);
    start(): Promise<any>;
    draw(): Promise<void>;
    moveChoice(dy: number): void;
    getValue(): any;
}
