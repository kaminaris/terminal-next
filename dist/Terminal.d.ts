/// <reference types="node" />
import { Codes } from './Codes';
import { TextFormatOptions } from './Interface/TextFormatOptions';
import { ReadStream, WriteStream } from 'tty';
import { Direction } from 'readline';
/**
 * Main terminal class that is mostly used for manipulating terminal streams
 */
export declare class Terminal {
    stdout?: WriteStream;
    stdin?: ReadStream;
    /** @ignore */
    codes: Codes;
    /**
     * Creates new instance of terminal
     *
     * @param stdout if not provided, process.stdout will be used
     * @param stdin if not provided, process.stdin will be used
     */
    constructor(stdout?: WriteStream, stdin?: ReadStream);
    /**
     * Format text without outputting it to stdout
     *
     * @category Text
     * @param t text to format
     * @param options formatting options
     */
    format(t: string, options?: TextFormatOptions): string;
    /**
     * Formats text and outputs it to stdout
     *
     * @category Text
     * @param t text to display
     * @param options formatting options
     */
    text(t: string, options?: TextFormatOptions): this;
    black(t: string): this;
    red(t: string): this;
    green(t: string): this;
    yellow(t: string): this;
    blue(t: string): this;
    magenta(t: string): this;
    cyan(t: string): this;
    white(t: string): this;
    dim(t: string): this;
    bright(t: string): this;
    bgBlack(t: string): this;
    bgRed(t: string): this;
    bgGreen(t: string): this;
    bgYellow(t: string): this;
    bgBlue(t: string): this;
    bgMagenta(t: string): this;
    bgCyan(t: string): this;
    bgWhite(t: string): this;
    /**
     * Outputs a single space
     * @category Text
     */
    space(): this;
    /**
     * Outputs a newline character \n
     * @category Text
     */
    newline(): this;
    /**
     * Clears the terminal
     * @category Terminal Control
     */
    clear(): void;
    /**
     * Clears the line
     *
     * @category Terminal Control
     * @param dir
     */
    clearLine(dir?: Direction): void;
    /**
     * Moves cursor to absolute position
     *
     * @category Terminal Control
     * @param x
     * @param y
     */
    cursorTo(x: number, y?: number): void;
    /**
     * Moves cursor to relative position
     *
     * @category Terminal Control
     * @param dx
     * @param dy
     */
    moveTo(dx: number, dy?: number): void;
    /**
     * Hides cursor
     * @category Terminal Control
     */
    hideCursor(): void;
    /**
     * Shows cursor
     * @category Terminal Control
     */
    showCursor(): void;
    /**
     * Puts terminal in raw mode or disables raw mode, only TTY terminals supported
     *
     * @category Terminal Control
     * @param raw
     */
    setRawMode(raw: boolean): void;
    /**
     * Gets cursor position, not every terminal is supported, better to not rely on this as from test
     * It can be inconsistent
     * @category Terminal Control
     */
    getCursor(): Promise<{
        x: number;
        y: number;
    }>;
}
