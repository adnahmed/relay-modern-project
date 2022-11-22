import {Meta, Story} from '@storybook/react'
import Arrow, {ArrowProps} from './Arrow'

export default {
    title: 'Arrow',
    component: Arrow
} as Meta

const Template: Story<ArrowProps> = args => <Arrow {...args} />;

export const Default = Template.bind({});
Default.args = {}