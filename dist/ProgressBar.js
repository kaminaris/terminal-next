"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
const Widget_1 = require("./Widget");
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
class ProgressBar extends Widget_1.Widget {
    /**
     * Creates new ProgressBar instance
     *
     * @param terminal Terminal instance
     * @param max maximum numerical progress
     * @param progress current numerical progress
     * @param width character width
     * @param text text to display after progressbar
     */
    constructor(terminal, max, progress = 0, width = 40, text = '') {
        super(terminal);
        this.max = max;
        this.progress = progress;
        this.width = width;
        this.text = text;
        /**
         * You can override style of this widget by executing functions `addStyle` and `setStyle`
         */
        this.styles = {
            default: {
                full: '\u2588',
                empty: '\u2591'
            },
            text: {
                full: '=',
                empty: ' '
            }
        };
        /**
         * Starting character, before the progressbar itself
         */
        this.startChar = '[';
        /**
         * Ending character, after progressbar
         */
        this.endChar = ']';
    }
    /**
     * Calculate current progress width based on progress, max and progressbar width
     */
    calculateProgress() {
        return Math.ceil(this.progress * this.width / this.max);
    }
    /**
     * Execute the widget
     */
    async draw() {
        this.terminal.hideCursor();
        this.terminal.clearLine();
        await this.terminal.cursorTo(0);
        const progress = this.calculateProgress();
        let progressBar = ' '.repeat(this.indent);
        progressBar += this.startChar;
        progressBar += this.styleDef.full.repeat(progress);
        progressBar += this.styleDef.empty.repeat(this.width - progress);
        progressBar += this.endChar;
        const progressText = ' ' + this.progress + '/' + this.max;
        this.terminal
            .text(progressBar, { fg: 'cyan' })
            .text(progressText)
            .text(' ')
            .text(this.text);
    }
    /**
     * Sets the current progress and draws progressbar
     *
     * @param progress
     */
    async setProgress(progress) {
        this.progress = progress;
        await this.draw();
        return this;
    }
}
exports.ProgressBar = ProgressBar;
