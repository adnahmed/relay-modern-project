module.exports = {
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-anonymous-default-export': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJson: require('./schema.json'),
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
    },
  ],
  plugins: ['graphql', 'tailwindcss'],
  extends: ['react-app', 'react-app/jest', 'plugin:storybook/recommended', 'plugin:tailwindcss/recommended'],
}
