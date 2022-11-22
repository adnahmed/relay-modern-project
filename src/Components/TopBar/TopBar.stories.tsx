import React from 'react';
import TopBar from './TopBar'

export default {
    title: 'TopBar',
};

const Template = (args) => {
    return <TopBar {...args} />
}

export const Primary = Template.bind({});
// @ts-ignore

Primary.args ={
    variant: 'primary'
}


