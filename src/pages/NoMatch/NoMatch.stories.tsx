import {Meta, Story} from '@storybook/react'
import NoMatch from './NoMatch'

export default {
    title: 'NoMatch',
    component: NoMatch
} as Meta

const Template: Story<{}> = args => <NoMatch {...args} />;

export const Default = Template.bind({});
Default.args = {}