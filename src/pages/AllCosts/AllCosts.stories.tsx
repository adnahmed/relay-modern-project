import {Meta, Story} from '@storybook/react'
import AllCosts from './AllCosts'

export default {
    title: 'AllCosts',
    component: AllCosts
} as Meta

const Template: Story<{}> = args => <AllCosts {...args} />;

export const Default = Template.bind({});
Default.args = {}