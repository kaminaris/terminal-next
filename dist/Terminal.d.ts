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
