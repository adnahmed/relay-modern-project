import React from 'react';
import { shallow } from 'enzyme';
import NoMatchCrop from './NoMatchCrop';

describe('<NoMatchCrop />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NoMatchCrop />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
