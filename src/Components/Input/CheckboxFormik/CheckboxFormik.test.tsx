import React from 'react';
import { shallow } from 'enzyme';
import CheckboxFormik from './CheckboxFormik';

describe('<CheckboxFormik />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CheckboxFormik name='name'>children</CheckboxFormik>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
