"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terminal = void 0;
const Codes_1 = require("./Codes");
const readline_1 = require("readline");
/**
 * Main terminal class that is mostly used for manipulating terminal streams
 */
class Terminal {
    /**
     * Creates new instance of terminal
     *
     * @param stdout if not provided, process.stdout will be used
     * @param stdin if not provided, process.stdin will be used
     */
    constructor(stdout, stdin) {
        this.stdout = stdout;
        this.stdin = stdin;
        /** @ignore */
        this.codes = new Codes_1.Codes();
        if (!this.stdout) {
            this.stdout = process.stdout;
        }
        if (!this.stdin) {
            this.stdin = process.stdin;
        }
    }
    /**
     * Format text without outputting it to stdout
     *
     * @category Text
     * @param t text to format
     * @param options formatting options
     */
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
    /**
     * Formats text and outputs it to stdout
     *
     * @category Text
     * @param t text to display
     * @param options formatting options
     */
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
    /**
     * Outputs a single space
     * @category Text
     */
    space() {
        return this.text(' ');
    }
    /**
     * Outputs a newline character \n
     * @category Text
     */
    newline() {
        this.stdout.write('\n');
        return this;
    }
    /**
     * Clears the terminal
     * @category Terminal Control
     */
    clear() {
        this.stdout.write(this.codes.clear);
    }
    /**
     * Clears the line
     *
     * @category Terminal Control
     * @param dir
     */
    clearLine(dir = 1) {
        readline_1.clearLine(this.stdout, dir);
    }
    /**
     * Moves cursor to absolute position
     *
     * @category Terminal Control
     * @param x
     * @param y
     */
    cursorTo(x, y) {
        readline_1.cursorTo(this.stdout, x, y);
    }
    /**
     * Moves cursor to relative position
     *
     * @category Terminal Control
     * @param dx
     * @param dy
     */
    moveTo(dx, dy) {
        readline_1.moveCursor(this.stdout, dx, dy);
    }
    /**
     * Hides cursor
     * @category Terminal Control
     */
    hideCursor() {
        this.stdout.write('\x1B[?25l');
    }
    /**
     * Shows cursor
     * @category Terminal Control
     */
    showCursor() {
        this.stdout.write('\x1B[?25h');
    }
    /**
     * Puts terminal in raw mode or disables raw mode, only TTY terminals supported
     *
     * @category Terminal Control
     * @param raw
     */
    setRawMode(raw) {
        if (this.stdin.isTTY) {
            this.stdin.setRawMode(raw);
        }
    }
    /**
     * Gets cursor position, not every terminal is supported, better to not rely on this as from test
     * It can be inconsistent
     * @category Terminal Control
     */
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
