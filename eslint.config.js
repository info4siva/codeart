// Flat config (ESLint 9). Replaces the old .eslintrc + eslint-config-airbnb
// setup: airbnb's flat-config story is not maintained, so this uses
// @eslint/js recommended + typescript-eslint recommended + the official
// Astro plugin, which covers the lint surface this repo actually needs.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  {
    ignores: ['dist/', '.astro/', '.sst/', 'node_modules/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Astro frontmatter + React 19 codebases trip these more than they help
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
    },
  },
);
