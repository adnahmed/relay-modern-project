import React from 'react';
import { shallow } from 'enzyme';
import Seed from './Seed';

describe('<Seed />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Seed />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
