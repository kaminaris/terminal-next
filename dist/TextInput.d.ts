/// <reference types="node" />
import { Interface } from 'readline';
import { Terminal } from './Terminal';
import { Widget } from './Widget';
export declare class TextInput extends Widget {
    protected question: string;
    protected validator?: (v: string) => boolean;
    protected hasError: boolean;
    protected answer: string;
    protected cursorAt: number;
    protected keypress: any;
    protected rlInterface: Interface;
    constructor(terminal: Terminal, question: string, validator?: (v: string) => boolean);
    setValidator(validator: (v: string) => boolean): void;
    start(): Promise<any>;
    left(): void;
    right(): void;
    home(): void;
    end(): void;
    backspace(): void;
    delete(): void;
    write(k: string): void;
    close(): void;
    draw(): void;
}
