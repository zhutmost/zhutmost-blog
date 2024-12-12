/** @type {import("prettier").Config} */
const prettierConfig = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/.*$',
    '^[.]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
}

export default prettierConfig
