import {Meta, Story} from '@storybook/react'
import CellRow, {CellRowProps} from './CellRow'

export default {
    title: 'CellRow',
    component: CellRow
} as Meta

const Template: Story<CellRowProps> = args => <CellRow {...args} />;

export const Default = Template.bind({});
Default.args = {}