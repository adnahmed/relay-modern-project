import React from 'react';
import { shallow } from 'enzyme';
import GrossInputsCost from './GrossInputsCost';

describe('<GrossInputsCost />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GrossInputsCost />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
