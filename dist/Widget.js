"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
/**
 * Abstract class to server as styled widget base
 */
class Widget {
    constructor(terminal) {
        this.terminal = terminal;
        /**
         * @ignore
         */
        this.styles = {};
        /**
         * current widget style
         */
        this.style = 'default';
        /**
         * Indent for widget (not every widget uses this)
         */
        this.indent = 0;
    }
    /**
     * @ignore
     */
    get styleDef() {
        return this.styles[this.style];
    }
    /**
     * Sets a new style for widget, style has to be added first, style is widget specific
     *
     * @category Widget Styles
     * @param style style name
     */
    setStyle(style) {
        if (typeof this.styles[style] === 'undefined') {
            throw new Error(`Style '${style}' not found`);
        }
        this.style = style;
        return this;
    }
    /**
     * Adds new style for a widget
     *
     * @category Widget Styles
     * @param name style name
     * @param style style definition, widget specific
     */
    addStyle(name, style) {
        this.styles[name] = style;
        return this;
    }
}
exports.Widget = Widget;
