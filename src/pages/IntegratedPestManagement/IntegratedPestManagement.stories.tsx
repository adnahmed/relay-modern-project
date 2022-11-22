import {Meta, Story} from '@storybook/react'
import IntegratedPestManagement, {IntegratedPestManagementProps} from './IntegratedPestManagement'

export default {
    title: 'IntegratedPestManagement',
    component: IntegratedPestManagement
} as Meta

const Template: Story<IntegratedPestManagementProps> = args => <IntegratedPestManagement {...args} />;

export const Default = Template.bind({});
Default.args = {}