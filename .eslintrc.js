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
    'relay/graphql-syntax': 'error',
    'relay/compat-uses-vars': 'warn',
    'relay/graphql-naming': 'error',
    'relay/generated-flow-types': 'warn',
    'relay/must-colocate-fragment-spreads': 'warn',
    'relay/no-future-added-value': 'warn',
    'relay/unused-fields': 'warn',
    'relay/function-required-argument': 'warn',
    'relay/hook-required-argument': 'warn'
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
    },
  ],
  plugins: ['graphql', 'tailwindcss', 'relay'],
  extends: ['react-app', 'react-app/jest', 'plugin:storybook/recommended', 'plugin:tailwindcss/recommended', 'plugin:relay/recommended'],
}
