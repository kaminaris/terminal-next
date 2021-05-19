import { Terminal } from '../Terminal';

export interface EscapeSequence {
	on: string;
	off?: string;
	/**
	 * Not available
	 */
	na?: boolean;
	fb?: boolean;
	optimized?: (x: string, y: string) => string;
	handler: (this: Terminal, ...args: any[]) => any;
}