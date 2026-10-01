// apps/web — ESLint flat config (Next.js 15 + ESLint 9).
import nextPlugin from '@next/eslint-plugin-next';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
];
