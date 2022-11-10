import React from 'react';
import { shallow } from 'enzyme';
import InputsCrop from './InputsCrop';

describe('<InputsCrop />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputsCrop />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
