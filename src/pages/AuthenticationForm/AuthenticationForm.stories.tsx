import {Meta, Story} from '@storybook/react'
import AuthenticationForm, {AuthenticationFormProps} from './AuthenticationForm'

export default {
    title: 'AuthenticationForm',
    component: AuthenticationForm
} as Meta

const Template: Story<AuthenticationFormProps> = args => <AuthenticationForm {...args} />;

export const Default = Template.bind({});
Default.args = {}