import { Widget } from './Widget';
import { Terminal } from './Terminal';
/**
 * Spinner with a text
 *
 * ![](https://i.imgur.com/3wYKaNZ.gif)
 *
 * ```ts
 * const spinner = new Spinner(t, 'test');
 * // you define tick rate yourself or just tick whenever a progress is made
 * const itv = setInterval(async () => {
 * 	await spinner.draw();
 * }, 100);
 *
 * setTimeout(()=> {
 * 	clearInterval(itv);
 * 	// important, in order to stop terminal from flickering, show cursor after this is done
 * 	t.showCursor();
 * }, 3000);
 * ```
 */
export declare class Spinner extends Widget {
    protected text: string;
    /**
     * Style definition for this widget is just a character array ex `['a', 'b', 'c']`
     */
    styles: {
        [name: string]: any;
    };
    /**
     * Current spinner tick (index of chars table)
     */
    tick: number;
    /**
     * Creates Spinner instance
     *
     * @param terminal {@link Terminal} instance
     * @param text text after spinner
     */
    constructor(terminal: Terminal, text?: string);
    /**
     * Draw the spinner, either in interval or when progress is made
     *
     * @param noTick if this is set to `true`, tick will not inscrease
     */
    draw(noTick?: boolean): this;
    /**
     * Sets the text after spinner
     *
     * @param t
     */
    setText(t: string): this;
}
