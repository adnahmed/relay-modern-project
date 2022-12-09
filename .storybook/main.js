const path = require('path')
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js')
require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath)

module.exports = {
  stories: ['../src/{Components,pages}/**/*.stories.tsx', '../node_modules/storybook-tailwind-foundations/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    'storybook-vscode-component/register',
    'storybook-addon-sass-postcss',
    'storybook-tailwind-dark-mode',
    // [require.resolve('storybook-addon-grid')],
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
}
