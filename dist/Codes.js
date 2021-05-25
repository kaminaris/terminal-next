"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codes = void 0;
class Codes {
    constructor() {
        this.clear = '\x1Bc';
        this.reset = '\x1b[0m';
        this.bright = '\x1b[1m';
        this.dim = '\x1b[2m';
        this.underscore = '\x1b[4m';
        this.blink = '\x1b[5m';
        this.reverse = '\x1b[7m';
        this.hidden = '\x1b[8m';
        this.fullForeground = '\x1b[38;5;';
        this.fullBackground = '\x1b[48;5;';
        this.foreground = new Map([
            ['black', '\x1b[30m'],
            ['red', '\x1b[31m'],
            ['green', '\x1b[32m'],
            ['yellow', '\x1b[33m'],
            ['blue', '\x1b[34m'],
            ['magenta', '\x1b[35m'],
            ['cyan', '\x1b[36m'],
            ['white', '\x1b[37m']
        ]);
        this.background = new Map([
            ['black', '\x1b[40m'],
            ['red', '\x1b[41m'],
            ['green', '\x1b[42m'],
            ['yellow', '\x1b[43m'],
            ['blue', '\x1b[44m'],
            ['magenta', '\x1b[45m'],
            ['cyan', '\x1b[46m'],
            ['white', '\x1b[47m']
        ]);
    }
    getColorCode(type, name) {
        return typeof name === 'string' ? this[type].get(name) : this.getRgbCode(type, name);
    }
    addColor(type, name, code) {
        this[type].set(name, typeof code === 'string' ? code : this.getRgbCode(type, code));
        return this;
    }
    getRgbCode(type, code) {
        const index = 16 + 36 * code.r + 6 * code.g + code.b;
        if (type === 'foreground') {
            return this.fullForeground + index + 'm';
        }
        return this.fullBackground + index + 'm';
    }
}
exports.Codes = Codes;
