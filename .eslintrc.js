module.exports = {
  extends: ['react-app', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      tabWidth: 2,
      printWidth: 100,
      semicolons: true,
      quoteProps: 'as-needed',
      jsxSingleQuote: false,
      bracketSpacing: true,
      jsxBracketSameLine: true,
      arrowParens: 'always',
      endOfLine: 'lf'
    }]
  }
};