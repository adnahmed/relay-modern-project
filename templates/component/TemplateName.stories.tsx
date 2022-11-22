import React from 'react';
import TemplateName from './TemplateName'

export default {
    title: 'TemplateName',
    component: TemplateName
};

const Template = (args) => {
    return <TemplateName {...args} />
}

export const Primary = Template.bind({});