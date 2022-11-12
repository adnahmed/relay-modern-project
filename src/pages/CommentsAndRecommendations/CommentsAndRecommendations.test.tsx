import React from 'react';
import {shallow} from 'enzyme';
import CommentsAndRecommendations from './CommentsAndRecommendations';

describe('<CommentsAndRecommendations />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CommentsAndRecommendations topic="topic" />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
