import {Meta, Story} from '@storybook/react'
import TableHead, {TableHeadProps} from './TableHead'

export default {
    title: 'TableHead',
    component: TableHead
} as Meta

const Template: Story<TableHeadProps> = args => <TableHead {...args} />;

export const Default = Template.bind({});
Default.args = {}