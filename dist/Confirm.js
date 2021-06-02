"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirm = void 0;
const readline_1 = require("readline");
const Action_1 = require("./Action");
const Widget_1 = require("./Widget");
/**
 * Boolean confirmation in terminal, returns false/true, example:
 *
 * ```ts
 * const ti = new Confirm(t, 'Super?');
 * const answ = await ti.start();
 * t.text(answ.toString()).newline();
 * ```
 */
class Confirm extends Widget_1.Widget {
    /**
     * Creates new confirmation widget
     *
     * @param terminal instance of Terminal
     * @param question question you wish to ask
     * @param yesDefault if set to true, yes (true) will be default (on enter press)
     * @param yes character that will act as true response, this has to be a single letter
     * @param no character that will act as false response, this has to be a single letter
     */
    constructor(terminal, question, yesDefault = true, yes = 'y', no = 'n') {
        super(terminal);
        this.question = question;
        this.yesDefault = yesDefault;
        this.yes = yes;
        this.no = no;
        this.answer = true;
        this.answer = yesDefault;
        if (yes.length !== 1 || no.length !== 1) {
            throw new Error('Confirm requires one letter yes/no');
        }
    }
    /**
     * Execute the widget, this will stop terminal and wait for keypress, resolves the promise to true false or null
     * null if action was canceled by pressing escape or abort keyboard command
     */
    async start() {
        return new Promise((resolve) => {
            this.rlInterface = readline_1.createInterface({ input: this.terminal.stdin, escapeCodeTimeout: 50 });
            readline_1.emitKeypressEvents(this.terminal.stdin, this.rlInterface);
            this.terminal.setRawMode(true);
            this.keypress = (str, key) => {
                const action = Action_1.Action.actionName(key);
                // this.terminal.text(key.name);
                switch (action) {
                    case 'abort':
                    case 'escape':
                        this.close();
                        resolve(null);
                        break;
                    case 'return':
                        this.close();
                        resolve(this.answer);
                        break;
                    default:
                        const answer = this.check(str);
                        if (answer !== null) {
                            this.close();
                            resolve(answer);
                        }
                }
            };
            this.terminal.stdin.on('keypress', this.keypress);
            this.draw();
        });
    }
    /**
     * @ignore
     */
    check(str) {
        if (str.toLowerCase() === this.yes.toLowerCase()) {
            return true;
        }
        if (str.toLowerCase() === this.no.toLowerCase()) {
            return false;
        }
        return null;
    }
    /**
     * @ignore
     */
    close() {
        this.terminal.setRawMode(false);
        this.terminal.stdin.removeListener('keypress', this.keypress);
        this.terminal.showCursor();
        this.terminal.newline();
        this.rlInterface.close();
    }
    /**
     * Draws the widget, not advised to run manually
     */
    draw() {
        this.terminal.cursorTo(0);
        this.terminal.text(this.question, { fg: 'cyan' }).space();
        const y = this.yesDefault ? this.yes.toUpperCase() : this.yes;
        const n = this.yesDefault ? this.no : this.no.toUpperCase();
        this.terminal.text(`[${y}/${n}]`);
        this.terminal.clearLine(1);
    }
}
exports.Confirm = Confirm;
