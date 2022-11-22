import {Meta, Story} from '@storybook/react'
import GrossInputsCost, {GrossInputsCostProps} from './GrossInputsCost'

export default {
    title: 'GrossInputsCost',
    component: GrossInputsCost
} as Meta

const Template: Story<GrossInputsCostProps> = args => <GrossInputsCost {...args} />;

export const Default = Template.bind({});
Default.args = {}