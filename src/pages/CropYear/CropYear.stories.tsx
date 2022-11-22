import {Meta, Story} from '@storybook/react'
import {CropYear} from './CropYear'

export default {
    title: 'CropYear',
    component: CropYear
} as Meta

const Template: Story<{}> = args => <CropYear {...args} />;

export const Default = Template.bind({});
Default.args = {}