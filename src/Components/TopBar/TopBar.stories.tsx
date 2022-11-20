import React from 'react';
import TopBar from './TopBar'

export default {
    title: 'TopBar',
    component: TopBar
};

const Template = (args) => {
    return <TopBar {...args} />
}

export const Primary = Template.bind({});