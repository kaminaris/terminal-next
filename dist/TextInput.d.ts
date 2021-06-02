/// <reference types="node" />
import { Interface } from 'readline';
import { Terminal } from './Terminal';
import { Widget } from './Widget';
/**
 * TextInput widget, example:
 *
 * ![](https://i.imgur.com/ikCwe6n.png)
 *
 * ```ts
 * const ti = new TextInput(t, 'Your name?');
 * const answ = await ti.start();
 * t.text(answ);
 * ```
 */
export declare class TextInput extends Widget {
    protected question: string;
    protected validator?: (v: string) => boolean;
    protected hasError: boolean;
    protected answer: string;
    protected cursorAt: number;
    protected keypress: any;
    protected rlInterface: Interface;
    /**
     * Create TextInput widget
     *
     * @param terminal {@link Terminal} instance
     * @param question question to ask
     * @param validator custom validator that can deny the value is conditions are not met
     */
    constructor(terminal: Terminal, question: string, validator?: (v: string) => boolean);
    /**
     * Sets the validator
     *
     * @param validator
     */
    setValidator(validator: (v: string) => boolean): void;
    /**
     * Execute the widget
     */
    start(): Promise<any>;
    /**
     * keypress input handler
     *
     * @ignore
     */
    left(): void;
    /**
     * keypress input handler
     *
     * @ignore
     */
    right(): void;
    /**
     * keypress input handler
     *
     * @ignore
     */
    home(): void;
    /**
     * keypress input handler
     *
     * @ignore
     */
    end(): void;
    /**
     * keypress input handler
     *
     * @ignore
     */
    backspace(): void;
    /**
     * keypress input handler
     *
     * @ignore
     */
    delete(): void;
    /**
     * keypress input handler
     *
     * @ignore
     */
    write(k: string): void;
    /**
     * Close the widget
     */
    close(): void;
    /**
     * Draw the widget
     */
    draw(): void;
}
