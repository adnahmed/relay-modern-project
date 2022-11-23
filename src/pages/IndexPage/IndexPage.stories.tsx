import {Meta, Story} from '@storybook/react'
import IndexPage, {IndexPageProps} from './IndexPage'

export default {
    title: 'IndexPage',
    component: IndexPage,
    grid: {
        columns: 'var(--columns)'
    }
} as Meta

const Template: Story<IndexPageProps> = args => <IndexPage {...args} />;

export const Default = Template.bind({});
Default.args = {}
Default.parameters = {
    backgrounds: {
        values: [
            {name: 'red', value: '#f00'},
            {name: 'green', value: '#0f0'},
            {name: 'blue', value: '#00f'},
            {name: 'black', value: '#000'},
            {name: 'white', value: '#fff'}
        ]
    }
}