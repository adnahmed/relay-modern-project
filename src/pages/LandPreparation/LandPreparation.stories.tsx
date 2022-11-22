import {Meta, Story} from '@storybook/react'
import LandPreparation, {LandPreparationProps} from './LandPreparation'

export default {
    title: 'LandPreparation',
    component: LandPreparation
} as Meta

const Template: Story<LandPreparationProps> = args => <LandPreparation {...args} />;

export const Default = Template.bind({});
Default.args = {}