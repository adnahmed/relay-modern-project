// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css'
import '../src/index.scss'
import ReactRouterDecorator from './ReactRouterDecorator'
import {wd} from 'paths.macro'
/// Configure Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // grid: {
  //     gridOn: true,
  //     columns: 12,
  //     gap: '20px',
  //     gutter: '50px',
  //     maxWidth: '1024px',
  // },
  storySource: {
    repository: 'https://github.com/adnahmed/react-app',
    workingDir: wd || 'D:\\projects\\kesan-diary\\',
  },
}
export const decorators = [ReactRouterDecorator]
export const globalType = {
  darkMode: true,
}
export default parameters
