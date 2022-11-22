import React from 'react';
import { shallow } from 'enzyme';
import MenuButton from './MenuButton';

describe('<MenuButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MenuButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
