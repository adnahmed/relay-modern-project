import {Meta, Story} from '@storybook/react'
import InputsCrop, {InputsCropProps} from './InputsCrop'

export default {
    title: 'InputsCrop',
    component: InputsCrop
} as Meta

const Template: Story<InputsCropProps> = args => <InputsCrop {...args} />;

export const Default = Template.bind({});
Default.args = {}