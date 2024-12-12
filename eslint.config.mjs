import path from 'path'
import { fileURLToPath } from 'url'
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import eslintTs from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default eslintTs.config(
  {
    ignores: ['**/dist/', '**/node_modules/', '**/*.config.mjs', '**/.content-collections/'],
  },
  eslint.configs.recommended,
  ...eslintTs.configs.strictTypeChecked,
  ...eslintTs.configs.stylisticTypeChecked,
  ...fixupConfigRules(compat.extends('plugin:@next/next/recommended')),
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: true,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        { allowConstantLoopConditions: true, checkTypePredicates: true },
      ],
    },
  }
)
