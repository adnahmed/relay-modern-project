import React from 'react';
import { shallow } from 'enzyme';
import General from './General';

describe('<General />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<General />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
