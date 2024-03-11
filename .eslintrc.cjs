module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"no-unused-vars": [
			"error",
			{ vars: "all", args: "after-used", ignoreRestSiblings: false },
		],
		"no-extra-semi": "off",
	},
};
