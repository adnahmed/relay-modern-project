import {Meta, Story} from '@storybook/react'
import Cell, {CellProps} from './Cell'

export default {
    title: 'Cell',
    component: Cell
} as Meta

const Template: Story<CellProps> = args => <Cell {...args} />;

export const Default = Template.bind({});
Default.args = {}