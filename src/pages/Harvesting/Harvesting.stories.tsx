import {Meta, Story} from '@storybook/react'
import Harvesting, {HarvestingProps} from './Harvesting'

export default {
    title: 'Harvesting',
    component: Harvesting
} as Meta

const Template: Story<HarvestingProps> = args => <Harvesting {...args} />;

export const Default = Template.bind({});
Default.args = {}