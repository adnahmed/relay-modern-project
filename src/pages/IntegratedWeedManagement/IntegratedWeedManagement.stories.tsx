import {Meta, Story} from '@storybook/react'
import IntegratedWeedManagement, {IntegratedWeedManagementProps} from './IntegratedWeedManagement'

export default {
    title: 'IntegratedWeedManagement',
    component: IntegratedWeedManagement
} as Meta

const Template: Story<IntegratedWeedManagementProps> = args => <IntegratedWeedManagement {...args} />;

export const Default = Template.bind({});
Default.args = {}