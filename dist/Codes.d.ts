import { Color } from './Interface/Color';
export declare class Codes {
    clear: string;
    reset: string;
    bright: string;
    dim: string;
    underscore: string;
    blink: string;
    reverse: string;
    hidden: string;
    fullForeground: string;
    fullBackground: string;
    foreground: Map<string, string>;
    background: Map<string, string>;
    getColorCode(type: 'foreground' | 'background', name: string | Color): string;
    addColor(type: 'foreground' | 'background', name: string, code: string | Color): this;
    getRgbCode(type: 'foreground' | 'background', code: Color): string;
}
