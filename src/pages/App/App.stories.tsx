import {Meta, Story} from '@storybook/react'
import App from './App'

export default {
    title: 'App',
    component: App
} as Meta

const Template: Story<{}> = args => <App {...args} />;

export const Default = Template.bind({});
Default.args = {}