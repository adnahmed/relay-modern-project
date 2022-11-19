import ReactRouterDecorator from './ReactRouterDecorator'
/// Configure Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
export const decorators = [ReactRouterDecorator]
export default parameters
