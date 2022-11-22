import {Meta, Story} from '@storybook/react'
import Sowing, {SowingProps} from './Sowing'

export default {
    title: 'Sowing',
    component: Sowing
} as Meta

const Template: Story<SowingProps> = args => <Sowing {...args} />;

export const Default = Template.bind({});
Default.args = {}