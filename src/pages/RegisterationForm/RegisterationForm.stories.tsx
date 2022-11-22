import {Meta, Story} from '@storybook/react'
import RegisterationForm, {RegisterationFormProps} from './RegisterationForm'

export default {
    title: 'RegisterationForm',
    component: RegisterationForm
} as Meta

const Template: Story<RegisterationFormProps> = args => <RegisterationForm {...args} />;

export const Default = Template.bind({});
Default.args = {}