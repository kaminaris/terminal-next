"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
class Widget {
    constructor(terminal) {
        this.terminal = terminal;
        this.styles = {};
        this.style = 'default';
        this.indent = 0;
    }
    get styleDef() {
        return this.styles[this.style];
    }
    setStyle(style) {
        if (typeof this.styles[style] === 'undefined') {
            throw new Error(`Style '${style}' not found`);
        }
        this.style = style;
    }
    addStyle(name, style) {
        this.styles[name] = style;
    }
}
exports.Widget = Widget;
