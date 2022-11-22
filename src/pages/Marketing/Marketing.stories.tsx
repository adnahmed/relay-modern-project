import {Meta, Story} from '@storybook/react'
import Marketing, {MarketingProps} from './Marketing'

export default {
    title: 'Marketing',
    component: Marketing
} as Meta

const Template: Story<MarketingProps> = args => <Marketing {...args} />;

export const Default = Template.bind({});
Default.args = {}