import {Meta, Story} from '@storybook/react'
import CommentsAndRecommendations, {CommentsAndRecommendationsProps} from './CommentsAndRecommendations'

export default {
    title: 'CommentsAndRecommendations',
    component: CommentsAndRecommendations
} as Meta

const Template: Story<CommentsAndRecommendationsProps> = args => <CommentsAndRecommendations {...args} />;

export const Default = Template.bind({});
Default.args = {}