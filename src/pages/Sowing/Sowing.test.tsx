import React from 'react';
import { shallow } from 'enzyme';
import Sowing from './Sowing';

describe('<Sowing />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Sowing />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
