import React from 'react';
import {shallow} from 'enzyme';
import TopBar from './TopBar';

describe('<TopBar />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<TopBar />);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
