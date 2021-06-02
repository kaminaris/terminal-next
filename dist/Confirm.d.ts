/// <reference types="node" />
import { Interface } from 'readline';
import { Terminal } from './Terminal';
import { Widget } from './Widget';
/**
 * Boolean confirmation in terminal, returns false/true, example:
 *
 * ```ts
 * const ti = new Confirm(t, 'Super?');
 * const answ = await ti.start();
 * t.text(answ.toString()).newline();
 * ```
 */
export declare class Confirm extends Widget {
    protected question: string;
    protected yesDefault: boolean;
    protected yes: string;
    protected no: string;
    protected keypress: any;
    protected answer: boolean;
    protected rlInterface: Interface;
    /**
     * Creates new confirmation widget
     *
     * @param terminal instance of Terminal
     * @param question question you wish to ask
     * @param yesDefault if set to true, yes (true) will be default (on enter press)
     * @param yes character that will act as true response, this has to be a single letter
     * @param no character that will act as false response, this has to be a single letter
     */
    constructor(terminal: Terminal, question: string, yesDefault?: boolean, yes?: string, no?: string);
    /**
     * Execute the widget, this will stop terminal and wait for keypress, resolves the promise to true false or null
     * null if action was canceled by pressing escape or abort keyboard command
     */
    start(): Promise<boolean | null>;
    /**
     * @ignore
     */
    check(str: string): boolean;
    /**
     * @ignore
     */
    close(): void;
    /**
     * Draws the widget, not advised to run manually
     */
    draw(): void;
}
