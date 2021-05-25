"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
class ProgressBar {
    constructor(terminal, max, progress = 0, width = 40, text = '', style = 'default') {
        this.terminal = terminal;
        this.max = max;
        this.progress = progress;
        this.width = width;
        this.text = text;
        this.style = style;
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
        this.indent = 0;
        this.startChar = '[';
        this.endChar = ']';
    }
    get styleDef() {
        return this.styles[this.style];
    }
    setStyle(style) {
        if (typeof this.styles[style] === 'undefined') {
            throw new Error(`Style '${style}' not found`);
        }
        this.style = style;
        return this;
    }
    calculateProgress() {
        return Math.ceil(this.progress * this.width / this.max);
    }
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
    async setProgress(progress) {
        this.progress = progress;
        await this.draw();
        return this;
    }
}
exports.ProgressBar = ProgressBar;
