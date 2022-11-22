import {Meta, Story} from '@storybook/react'
import TopicDashboard, {TopicDashboardProps} from './TopicDashboard'

export default {
    title: 'TopicDashboard',
    component: TopicDashboard
} as Meta

const Template: Story<TopicDashboardProps> = args => <TopicDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {}