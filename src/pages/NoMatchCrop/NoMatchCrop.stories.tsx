import {Meta, Story} from '@storybook/react'
import NoMatchCrop, {NoMatchCropProps} from './NoMatchCrop'

export default {
    title: 'NoMatchCrop',
    component: NoMatchCrop
} as Meta

const Template: Story<NoMatchCropProps> = args => <NoMatchCrop {...args} />;

export const Default = Template.bind({});
Default.args = {}