import {Meta, Story} from '@storybook/react'
import UnknownPage, {UnknownPageProps} from './UnknownPage'

export default {
    title: 'UnknownPage',
    component: UnknownPage
} as Meta

const Template: Story<UnknownPageProps> = args => <UnknownPage {...args} />;

export const Default = Template.bind({});
Default.args = {}