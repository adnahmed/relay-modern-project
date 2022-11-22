import {Meta, Story} from '@storybook/react'
import Irrigation, {IrrigationProps} from './Irrigation'

export default {
    title: 'Irrigation',
    component: Irrigation
} as Meta

const Template: Story<IrrigationProps> = args => <Irrigation {...args} />;

export const Default = Template.bind({});
Default.args = {}