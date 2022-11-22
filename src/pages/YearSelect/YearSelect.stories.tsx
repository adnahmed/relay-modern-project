import {Meta, Story} from '@storybook/react'
import YearSelect, {YearSelectProps} from './YearSelect'

export default {
    title: 'YearSelect',
    component: YearSelect
} as Meta

const Template: Story<YearSelectProps> = args => <YearSelect {...args} />;

export const Default = Template.bind({});
Default.args = {}