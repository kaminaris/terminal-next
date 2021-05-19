module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'max-len': [2, 140],
		'no-multiple-empty-lines': 1,
		semi: [2, 'always'],
		'quote-props': [2, 'as-needed'],
		quotes: 'off',
		'no-case-declarations': 0,
		eqeqeq: 2,

		'@typescript-eslint/import-spacing': 0,
		'@typescript-eslint/indent': [
			2,
			'tab'
		],
		'@typescript-eslint/one-line': 0,
		'@typescript-eslint/eofline': 0,
		'@typescript-eslint/object-literal-shorthand': 0,
		'@typescript-eslint/array-type': 0,
		'@typescript-eslint/arrow-parens': 0,
		'@typescript-eslint/contextual-lifecycle': 0,
		'@typescript-eslint/directive-selector': [
			0,
			'attribute',
			'app',
			'camelCase'
		],
		'@typescript-eslint/component-selector': [
			0,
			'element',
			'app',
			'kebab-case'
		],
		'@typescript-eslint/interface-name': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/max-classes-per-file': 0,
		'@typescript-eslint/member-access': 0,
		'@typescript-eslint/member-ordering': [
			2,
			{
				default: [
					'static-field',
					'instance-field',
					'static-method',
					'instance-method'
				]
			}
		],
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true
			}
		],
		'@typescript-eslint/no-empty': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-inferrable-types': 1,
		'@typescript-eslint/no-non-null-assertion': 2,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-bitwise': 0,
		'@typescript-eslint/object-literal-sort-keys': 0,
		'@typescript-eslint/ordered-imports': 0,
		'@typescript-eslint/trailing-comma': 0,
		'@typescript-eslint/use-host-property-decorator': 0
	},
};