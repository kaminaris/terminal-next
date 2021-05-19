export interface TermConfig {
	esc: any;
	keymap: any;
	handler: any;
	support: {
		deltaEscapeSequence: boolean;
		"256colors": boolean;
		"trueColor": boolean;
	},
	colorRegister: any;
}