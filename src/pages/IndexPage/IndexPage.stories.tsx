import {Meta, Story} from '@storybook/react'
import IndexPage, {IndexPageProps} from './IndexPage'

export default {
    title: 'IndexPage',
    component: IndexPage
} as Meta

const Template: Story<IndexPageProps> = args => <IndexPage {...args} />;

export const Default = Template.bind({});
Default.args = {}