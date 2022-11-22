import {Meta, Story} from '@storybook/react'
import CommentOrRecommendationBox, {CommentOrRecommmendationBoxProps} from './CommentOrRecommendationBox'

export default {
    title: 'CommentOrRecommendationBox',
    component: CommentOrRecommendationBox
} as Meta

const Template: Story<CommentOrRecommmendationBoxProps> = args => <CommentOrRecommendationBox {...args} />;

export const Default = Template.bind({});
Default.args = {}