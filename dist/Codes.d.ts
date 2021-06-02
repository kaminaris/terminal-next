import { Color } from './Interface/Color';
export declare type ColorCodeType = 'foreground' | 'background';
/**
 * Class that is used to group special terminal ansi codes, if you want to have support for custom codes,
 * extend this class and override it in terminal like this:
 *
 * ```ts
 * const t = new Terminal();
 * t.codes = yourCustomCodesClassInstance;
 * ```
 */
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
    /**
     * Gets the color code for color name
     *
     * @param type either 'foreground' or 'background'
     * @param name color name or rgb code
     */
    getColorCode(type: ColorCodeType, name: string | Color): string;
    /**
     * Adds the color to palette
     *
     * @param type either 'foreground' or 'background'
     * @param name color name
     * @param code color code or rgb code
     */
    addColor(type: ColorCodeType, name: string, code: string | Color): this;
    /**
     * Gets the code for RGB color
     *
     * @param type either 'foreground' or 'background'
     * @param code color code or rgb code
     */
    getRgbCode(type: ColorCodeType, code: Color): string;
}
