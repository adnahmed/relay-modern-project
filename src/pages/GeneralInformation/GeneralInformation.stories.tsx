import {Meta, Story} from '@storybook/react'
import GeneralInformation, {GeneralInformationProps} from './GeneralInformation'

export default {
    title: 'GeneralInformation',
    component: GeneralInformation
} as Meta

const Template: Story<GeneralInformationProps> = args => <GeneralInformation {...args} />;

export const Default = Template.bind({});
Default.args = {}