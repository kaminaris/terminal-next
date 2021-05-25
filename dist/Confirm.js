"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirm = void 0;
const readline_1 = require("readline");
const Action_1 = require("./Action");
const Widget_1 = require("./Widget");
class Confirm extends Widget_1.Widget {
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
    check(str) {
        if (str.toLowerCase() === this.yes.toLowerCase()) {
            return true;
        }
        if (str.toLowerCase() === this.no.toLowerCase()) {
            return false;
        }
        return null;
    }
    close() {
        this.terminal.setRawMode(false);
        this.terminal.stdin.removeListener('keypress', this.keypress);
        this.terminal.showCursor();
        this.terminal.newline();
        this.rlInterface.close();
    }
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
