import {Meta, Story} from '@storybook/react'
import AppFrame, {AppFrameProps} from './AppFrame'

export default {
    title: 'AppFrame',
    component: AppFrame
} as Meta

const Template: Story<AppFrameProps> = args => <AppFrame {...args} />;

export const Default = Template.bind({});
Default.args = {}