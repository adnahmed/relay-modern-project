import {Meta, Story} from '@storybook/react'
import Information, {InformationProps} from './Information'

export default {
    title: 'Information',
    component: Information
} as Meta

const Template: Story<InformationProps> = args => <Information {...args} />;

export const Default = Template.bind({});
Default.args = {}