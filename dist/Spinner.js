"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const Widget_1 = require("./Widget");
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
class Spinner extends Widget_1.Widget {
    /**
     * Creates Spinner instance
     *
     * @param terminal {@link Terminal} instance
     * @param text text after spinner
     */
    constructor(terminal, text = '') {
        super(terminal);
        this.text = text;
        /**
         * Style definition for this widget is just a character array ex `['a', 'b', 'c']`
         */
        this.styles = {
            default: {
                chars: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
            },
        };
        /**
         * Current spinner tick (index of chars table)
         */
        this.tick = 0;
    }
    /**
     * Draw the spinner, either in interval or when progress is made
     *
     * @param noTick if this is set to `true`, tick will not inscrease
     */
    draw(noTick = false) {
        this.terminal.hideCursor();
        this.terminal.clearLine();
        this.terminal.cursorTo(0);
        const chars = this.styleDef.chars;
        this.terminal
            .text(chars[this.tick], { fg: 'cyan' })
            .text(' ')
            .text(this.text);
        if (!noTick) {
            this.tick++;
        }
        if (this.tick >= chars.length) {
            this.tick = 0;
        }
        return this;
    }
    /**
     * Sets the text after spinner
     *
     * @param t
     */
    setText(t) {
        this.text = t;
        this.draw();
        return this;
    }
}
exports.Spinner = Spinner;
