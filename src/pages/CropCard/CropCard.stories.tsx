import {Meta, Story} from '@storybook/react'
import CropCard from './CropCard'

export default {
    title: 'CropCard',
    component: CropCard
} as Meta

const Template: Story<{}> = args => <CropCard {...args} />;

export const Default = Template.bind({});
Default.args = {}