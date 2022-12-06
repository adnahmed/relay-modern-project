module.exports = {
    stories: ['../src/{Components,pages}/**/*.stories.tsx'],
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-interactions',
        'storybook-vscode-component/register'
        // [require.resolve('storybook-addon-grid')]
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    features: {
        interactionsDebugger: true,
    },
}