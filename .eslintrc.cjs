// module.exports = {
// 	root: true,
// 	parser: '@typescript-eslint/parser',
// 	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
// 	plugins: ['svelte3', '@typescript-eslint'],
// 	ignorePatterns: ['*.cjs'],
// 	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
// 	settings: {
// 		'svelte3/typescript': () => require('typescript')
// 	},
// 	parserOptions: {
// 		sourceType: 'module',
// 		ecmaVersion: 2020
// 	},
// 	env: {
// 		browser: true,
// 		es2017: true,
// 		node: true
// 	}
// };
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parserOptions: {
	  ecmaVersion: 2020,
	  sourceType: 'module',
	  tsconfigRootDir: __dirname,
	  project: ['./tsconfig.json'],
	  extraFileExtensions: ['.svelte']
	},
	env: {
	  es6: true,
	  browser: true
	},
	overrides: [
	  {
		files: ['*.svelte'],
		processor: 'svelte3/svelte3'
	  }
	],
	settings: {
	  'svelte3/typescript': require('typescript'),
	  // ignore style tags in Svelte because of Tailwind CSS
	  // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
	  'svelte3/ignore-styles': () => true
	},
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['node_modules']
  }
