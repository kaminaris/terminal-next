/// <reference types="node" />
import { Key } from 'readline';
/**
 * Simple class used to determine if key press was action or just a normal key
 */
export declare class Action {
    /**
     * Determine if key is action, if so, return normalized action name
     *
     * @param key
     */
    static actionName(key: Key): false | "left" | "right" | "end" | "abort" | "reset" | "down" | "up" | "escape" | "first" | "last" | "return" | "backspace" | "delete" | "tab" | "pagedown" | "pageup" | "home";
}
