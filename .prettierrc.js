module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['**/*.json', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
