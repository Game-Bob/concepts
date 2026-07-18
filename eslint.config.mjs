import eslintPluginAstro from "eslint-plugin-astro";
import noComments from "eslint-plugin-no-comments";
import tseslint from "typescript-eslint";

const sourceTextPlugin = {
    rules: {
        "no-emojis": {
            meta: { type: "problem" },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const pattern = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]/gu;
                        const match = pattern.exec(sourceCode.getText());

                        if (match) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "Emojis are not allowed in source code.",
                            });
                        }
                    },
                };
            },
        },
        "no-html-comments": {
            meta: { type: "layout" },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const match = /<!--[\s\S]*?-->/.exec(sourceCode.getText());

                        if (match) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "HTML comments are not allowed.",
                            });
                        }
                    },
                };
            },
        },
        "no-css-comments": {
            meta: { type: "layout" },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const match = /\/\*[\s\S]*?\*\//.exec(sourceCode.getText());

                        if (match) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "Block comments are not allowed.",
                            });
                        }
                    },
                };
            },
        },
    },
};

export default [
    {
        ignores: ["dist/**", "node_modules/**", ".astro/**", ".wrangler/**", "coverage/**"],
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs["flat/recommended"],
    {
        files: ["**/*.{js,mjs,ts,tsx,astro}"],
        plugins: {
            "no-comments": noComments,
            source: sourceTextPlugin,
        },
        rules: {
            "source/no-emojis": "error",
            "no-comments/disallowComments": "error",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            complexity: ["error", { max: 8 }],
            "max-depth": ["error", 4],
            "max-lines": ["error", { max: 250, skipBlankLines: true, skipComments: true }],
            "max-lines-per-function": [
                "error",
                { max: 30, skipBlankLines: true, skipComments: true },
            ],
            "max-params": ["error", 4],
            "no-nested-ternary": "error",
            "no-unneeded-ternary": "error",
        },
    },
    {
        files: ["**/*.{astro,html}"],
        plugins: { source: sourceTextPlugin },
        rules: { "source/no-html-comments": "error" },
    },
    {
        files: ["**/*.astro"],
        plugins: { source: sourceTextPlugin },
        rules: { "source/no-css-comments": "error" },
    },
    {
        files: ["tests/**/*.ts"],
        rules: {
            "max-lines-per-function": "off",
            "max-lines": "off",
        },
    },
    {
        files: ["src/i18n/**/*.ts", "src/sections/**/locales.ts", "src/concepts/**/locales.ts"],
        rules: {
            "max-lines": "off",
            "max-lines-per-function": "off",
        },
    },
];
