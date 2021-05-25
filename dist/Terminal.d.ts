/// <reference types="node" />
import { Codes } from './Codes';
import { TextFormatOptions } from './Interface/TextFormatOptions';
import { ReadStream, WriteStream } from 'tty';
import { Direction } from 'readline';
export declare class Terminal {
    stdout?: WriteStream;
    stdin?: ReadStream;
    codes: Codes;
    constructor(stdout?: WriteStream, stdin?: ReadStream);
    format(t: string, options?: TextFormatOptions): string;
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
    space(): this;
    newline(): this;
    clear(): void;
    clearLine(dir?: Direction): void;
    cursorTo(x: number, y?: number): void;
    moveTo(dx: number, dy?: number): void;
    hideCursor(): void;
    showCursor(): void;
    setRawMode(raw: boolean): void;
    getCursor(): Promise<{
        x: number;
        y: number;
    }>;
}
