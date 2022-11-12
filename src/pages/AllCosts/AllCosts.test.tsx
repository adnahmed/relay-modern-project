import React from 'react';
import { shallow } from 'enzyme';
import AllCosts from './AllCosts';

describe('<AllCosts />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AllCosts />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
