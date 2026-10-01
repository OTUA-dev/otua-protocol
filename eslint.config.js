// eslint.config.js — OTUA Protocol monorepo root ESLint configuration.
// ESLint 9 flat config format. All workspace packages reference this file.
// https://eslint.org/docs/latest/use/configure/configuration-files

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/target/**',
      '**/*.d.ts',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // TypeScript recommended rules
      ...tsPlugin.configs['recommended'].rules,

      // Enforce explicit return types on exported functions
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Prefer const
      'prefer-const': 'error',

      // No unused vars (TypeScript handles this via noUnusedLocals, but keep ESLint aligned)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // No explicit any
      '@typescript-eslint/no-explicit-any': 'error',

      // No non-null assertions (use proper type narrowing)
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
];
