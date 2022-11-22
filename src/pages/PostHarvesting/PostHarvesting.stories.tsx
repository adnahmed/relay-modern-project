import {Meta, Story} from '@storybook/react'
import PostHarvesting, {PostHarvestingProps} from './PostHarvesting'

export default {
    title: 'PostHarvesting',
    component: PostHarvesting
} as Meta

const Template: Story<PostHarvestingProps> = args => <PostHarvesting {...args} />;

export const Default = Template.bind({});
Default.args = {}