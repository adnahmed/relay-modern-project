import {Meta, Story} from '@storybook/react'
import Seed, {SeedProps} from './Seed'

export default {
    title: 'Seed',
    component: Seed
} as Meta

const Template: Story<SeedProps> = args => <Seed {...args} />;

export const Default = Template.bind({});
Default.args = {}