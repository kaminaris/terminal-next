/// <reference types="node" />
import { Interface } from 'readline';
import { Terminal } from './Terminal';
import { Widget } from './Widget';
export declare class Confirm extends Widget {
    protected question: string;
    protected yesDefault: boolean;
    protected yes: string;
    protected no: string;
    protected keypress: any;
    protected answer: boolean;
    protected rlInterface: Interface;
    constructor(terminal: Terminal, question: string, yesDefault?: boolean, yes?: string, no?: string);
    start(): Promise<boolean | null>;
    check(str: string): boolean;
    close(): void;
    draw(): void;
}
