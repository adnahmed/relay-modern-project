import {Meta, Story} from '@storybook/react'
import NutrientManagement, {NutrientManagementProps} from './NutrientManagement'

export default {
    title: 'NutrientManagement',
    component: NutrientManagement
} as Meta

const Template: Story<NutrientManagementProps> = args => <NutrientManagement {...args} />;

export const Default = Template.bind({});
Default.args = {}