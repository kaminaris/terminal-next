"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terminal = void 0;
const Codes_1 = require("./Codes");
const readline_1 = require("readline");
class Terminal {
    constructor(stdout, stdin) {
        this.stdout = stdout;
        this.stdin = stdin;
        this.codes = new Codes_1.Codes();
        if (!this.stdout) {
            this.stdout = process.stdout;
        }
        if (!this.stdin) {
            this.stdin = process.stdin;
        }
    }
    format(t, options) {
        let output = '';
        if (options === null || options === void 0 ? void 0 : options.bg) {
            output += this.codes.getColorCode('background', options.bg);
        }
        if (options === null || options === void 0 ? void 0 : options.fg) {
            output += this.codes.getColorCode('foreground', options.fg);
        }
        if (options === null || options === void 0 ? void 0 : options.bright) {
            output += this.codes.bright;
        }
        if (options === null || options === void 0 ? void 0 : options.dim) {
            output += this.codes.dim;
        }
        if (options === null || options === void 0 ? void 0 : options.underscore) {
            output += this.codes.underscore;
        }
        output += t;
        output += this.codes.reset;
        return output;
    }
    text(t, options) {
        this.stdout.write(this.format(t, options));
        return this;
    }
    // Shortcodes for fg color
    black(t) { return this.text(t, { fg: 'black' }); }
    red(t) { return this.text(t, { fg: 'red' }); }
    green(t) { return this.text(t, { fg: 'green' }); }
    yellow(t) { return this.text(t, { fg: 'yellow' }); }
    blue(t) { return this.text(t, { fg: 'blue' }); }
    magenta(t) { return this.text(t, { fg: 'magenta' }); }
    cyan(t) { return this.text(t, { fg: 'cyan' }); }
    white(t) { return this.text(t, { fg: 'white' }); }
    dim(t) { return this.text(t, { dim: true }); }
    bright(t) { return this.text(t, { bright: true }); }
    // Shortcodes for bg color
    bgBlack(t) { return this.text(t, { bg: 'black' }); }
    bgRed(t) { return this.text(t, { bg: 'red' }); }
    bgGreen(t) { return this.text(t, { bg: 'green' }); }
    bgYellow(t) { return this.text(t, { bg: 'yellow' }); }
    bgBlue(t) { return this.text(t, { bg: 'blue' }); }
    bgMagenta(t) { return this.text(t, { bg: 'magenta' }); }
    bgCyan(t) { return this.text(t, { bg: 'cyan' }); }
    bgWhite(t) { return this.text(t, { bg: 'white' }); }
    space() {
        return this.text(' ');
    }
    newline() {
        this.stdout.write('\n');
        return this;
    }
    clear() {
        this.stdout.write(this.codes.clear);
    }
    clearLine(dir = 1) {
        readline_1.clearLine(this.stdout, dir);
    }
    cursorTo(x, y) {
        readline_1.cursorTo(this.stdout, x, y);
    }
    moveTo(dx, dy) {
        readline_1.moveCursor(this.stdout, dx, dy);
    }
    hideCursor() {
        this.stdout.write('\x1B[?25l');
    }
    showCursor() {
        this.stdout.write('\x1B[?25h');
    }
    setRawMode(raw) {
        if (this.stdin.isTTY) {
            this.stdin.setRawMode(raw);
        }
    }
    getCursor() {
        // const rl = createInterface(this.stdin, this.stdout);
        // const pos = rl.getCursorPos();
        // rl.close();
        // return pos;
        return new Promise((resolve) => {
            const code = '\x1b[6n';
            this.stdin.resume();
            this.setRawMode(true);
            this.stdin.once('data', (b) => {
                const match = /\[(\d+);(\d+)R$/.exec(b.toString());
                if (match) {
                    resolve({
                        x: +match[2],
                        y: +match[1]
                    });
                }
                // cleanup and close stdin
                this.setRawMode(false);
                this.stdin.pause();
            });
            this.stdout.write(code);
            this.stdout.emit('data', code);
        });
    }
}
exports.Terminal = Terminal;
