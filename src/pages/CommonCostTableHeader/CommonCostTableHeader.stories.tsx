import {Meta, Story} from '@storybook/react'
import CommonCostTableHeader, {CommonCostTableHeaderProps} from './CommonCostTableHeader'

export default {
    title: 'CommonCostTableHeader',
    component: CommonCostTableHeader
} as Meta

const Template: Story<CommonCostTableHeaderProps> = args => <CommonCostTableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {}