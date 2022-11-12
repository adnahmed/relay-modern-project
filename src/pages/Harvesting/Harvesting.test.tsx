import React from 'react';
import { shallow } from 'enzyme';
import Harvesting from './Harvesting';

describe('<Harvesting />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Harvesting />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
