import { Color } from './Color';
export interface TextFormatOptions {
    bg?: string | Color;
    fg?: string | Color;
    bright?: boolean;
    dim?: boolean;
    underscore?: boolean;
}
