module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  proseWrap: 'always',
  'prefer-template': 2,
  'no-var': 2,
  plugins: ['prettier-plugin-astro'],
};
