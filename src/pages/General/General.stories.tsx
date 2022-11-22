import {Meta, Story} from '@storybook/react'
import General, {GeneralProps} from './General'

export default {
    title: 'General',
    component: General
} as Meta

const Template: Story<GeneralProps> = args => <General {...args} />;

export const Default = Template.bind({});
Default.args = {}