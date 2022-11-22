import {Meta, Story} from '@storybook/react'
import IntegratedDiseaseManagement, {IntegratedDiseaseManagementProps} from './IntegratedDiseaseManagement'

export default {
    title: 'IntegratedDiseaseManagement',
    component: IntegratedDiseaseManagement
} as Meta

const Template: Story<IntegratedDiseaseManagementProps> = args => <IntegratedDiseaseManagement {...args} />;

export const Default = Template.bind({});
Default.args = {}