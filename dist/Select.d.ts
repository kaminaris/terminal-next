import { Terminal } from './Terminal';
import { Widget } from './Widget';
export interface SelectOption {
    title: string;
    value: any;
    selected?: boolean;
}
/**
 * Basic select widget, example:
 *
 * ![](https://i.imgur.com/PUwIYkG.gif)
 *
 * ```ts
 * const options = [
 * 	{title: 'Option 1', value: '111'},
 * 	{title: 'Option 2', value: '222'},
 * 	{title: 'Some other option', value: '333'},
 * ];
 * const select = new Select(t, options);
 * const result = await select.start();
 * t.text('answer: ' + result);
 * ```
 */
export declare class Select extends Widget {
    options: SelectOption[];
    protected firstDraw: boolean;
    /**
     * Creates select widget instance
     *
     * @param terminal {@link Terminal} instance
     * @param options select options, simple `{title: string, value: any}` array
     */
    constructor(terminal: Terminal, options: SelectOption[]);
    /**
     * Execute widget, stop terminal and wait for user input
     */
    start(): Promise<any>;
    draw(): Promise<void>;
    /**
     * @ignore
     */
    moveChoice(dy: number): void;
    /**
     * Gets the selected option value
     */
    getValue(): any;
}
