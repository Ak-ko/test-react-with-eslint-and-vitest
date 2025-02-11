import globals from 'globals';

import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import configPrettier from 'eslint-config-prettier';

import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    configPrettier,

    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

        ignores: ['**/*.config.js', '!**/eslint.config.js'],

        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },

        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: pluginPrettier,
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            'no-unused-vars': 'warn',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
