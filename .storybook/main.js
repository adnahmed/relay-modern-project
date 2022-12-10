const path = require('path')
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js')
require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath)

module.exports = {
  stories: ['../src/{Components,pages}/**/*.stories.tsx', '../node_modules/storybook-tailwind-foundations/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    // '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    'storybook-vscode-component/register',
    'storybook-tailwind-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
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
