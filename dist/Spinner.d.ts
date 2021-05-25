import { Widget } from './Widget';
import { Terminal } from './Terminal';
export declare class Spinner extends Widget {
    protected text: string;
    styles: {
        [name: string]: any;
    };
    tick: number;
    constructor(terminal: Terminal, text?: string);
    draw(noTick?: boolean): Promise<this>;
    setText(t: string): Promise<this>;
}
