import React from 'react';
import { shallow } from 'enzyme';
import Marketing from './Marketing';

describe('<Marketing />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Marketing />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
