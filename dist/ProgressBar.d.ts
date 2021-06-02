import { Widget } from './Widget';
import { Terminal } from './Terminal';
/**
 * ProgressBar widget, example
 *
 * ![](https://i.imgur.com/IYDxWBa.gif)
 *
 * ```ts
 * const pb = new ProgressBar(t, 100);
 * await pb.draw();
 * let prog = 0;
 * const itv = setInterval(async () => {
 * 	await pb.setProgress(prog);
 * 	prog++;
 * 	if (prog > 100) {
 * 		clearInterval(itv);
 * 	}
 * }, 50);
 * ```
 *
 * Built in styles: default, text
 *
 * Style definition:
 * ```ts
 * styleName: {
 * 	full: '\u2588',
 * 	empty: '\u2591'
 * }
 * ```
 */
export declare class ProgressBar extends Widget {
    protected max: number;
    protected progress: number;
    protected width: number;
    protected text: string;
    /**
     * You can override style of this widget by executing functions `addStyle` and `setStyle`
     */
    styles: {
        [name: string]: any;
    };
    /**
     * Starting character, before the progressbar itself
     */
    startChar: string;
    /**
     * Ending character, after progressbar
     */
    endChar: string;
    /**
     * Creates new ProgressBar instance
     *
     * @param terminal Terminal instance
     * @param max maximum numerical progress
     * @param progress current numerical progress
     * @param width character width
     * @param text text to display after progressbar
     */
    constructor(terminal: Terminal, max: number, progress?: number, width?: number, text?: string);
    /**
     * Calculate current progress width based on progress, max and progressbar width
     */
    calculateProgress(): number;
    /**
     * Execute the widget
     */
    draw(): Promise<void>;
    /**
     * Sets the current progress and draws progressbar
     *
     * @param progress
     */
    setProgress(progress: number): Promise<this>;
}
