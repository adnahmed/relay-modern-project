import {Meta, Story} from '@storybook/react'
import LaborManagement, {LaborManagementProps} from './LaborManagement'

export default {
    title: 'LaborManagement',
    component: LaborManagement
} as Meta

const Template: Story<LaborManagementProps> = args => <LaborManagement {...args} />;

export const Default = Template.bind({});
Default.args = {}