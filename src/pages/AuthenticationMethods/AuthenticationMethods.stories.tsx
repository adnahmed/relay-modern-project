import {Meta, Story} from '@storybook/react'
import AuthenticationMethods, {AuthenticationMethodsProps} from './AuthenticationMethods'

export default {
    title: 'AuthenticationMethods',
    component: AuthenticationMethods
} as Meta

const Template: Story<AuthenticationMethodsProps> = args => <AuthenticationMethods {...args} />;

export const Default = Template.bind({});
Default.args = {}