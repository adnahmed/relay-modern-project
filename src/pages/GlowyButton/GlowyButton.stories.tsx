import {Meta, Story} from '@storybook/react'
import GlowyButton, {GlowyButtonProps} from './GlowyButton'

export default {
    title: 'GlowyButton',
    component: GlowyButton
} as Meta

const Template: Story<GlowyButtonProps> = args => <GlowyButton {...args} />;

export const Default = Template.bind({});
Default.args = {}