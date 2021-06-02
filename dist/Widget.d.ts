import { Terminal } from './Terminal';
/**
 * Abstract class to server as styled widget base
 */
export declare abstract class Widget {
    protected terminal: Terminal;
    /**
     * @ignore
     */
    styles: {
        [name: string]: any;
    };
    /**
     * current widget style
     */
    style: string;
    /**
     * Indent for widget (not every widget uses this)
     */
    indent: number;
    constructor(terminal: Terminal);
    /**
     * @ignore
     */
    get styleDef(): any;
    /**
     * Sets a new style for widget, style has to be added first, style is widget specific
     *
     * @category Widget Styles
     * @param style style name
     */
    setStyle(style: string): this;
    /**
     * Adds new style for a widget
     *
     * @category Widget Styles
     * @param name style name
     * @param style style definition, widget specific
     */
    addStyle(name: string, style: any): this;
    abstract draw(): any;
}
