"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const Widget_1 = require("./Widget");
class Spinner extends Widget_1.Widget {
    constructor(terminal, text = '') {
        super(terminal);
        this.text = text;
        this.styles = {
            default: {
                chars: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
            },
        };
        this.tick = 0;
    }
    async draw(noTick = false) {
        this.terminal.hideCursor();
        this.terminal.clearLine();
        await this.terminal.cursorTo(0);
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
    async setText(t) {
        this.text = t;
        await this.draw();
        return this;
    }
}
exports.Spinner = Spinner;
