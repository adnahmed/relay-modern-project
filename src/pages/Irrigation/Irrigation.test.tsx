import React from 'react';
import { shallow } from 'enzyme';
import Irrigation from './Irrigation';

describe('<Irrigation />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Irrigation />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
