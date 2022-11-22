import {Meta, Story} from '@storybook/react'
import HarvestDate, {HarvestDateProps} from './HarvestDate'

export default {
    title: 'HarvestDate',
    component: HarvestDate
} as Meta

const Template: Story<HarvestDateProps> = args => <HarvestDate {...args} />;

export const Default = Template.bind({});
Default.args = {}