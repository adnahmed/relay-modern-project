import React from 'react';
import { shallow } from 'enzyme';
import SigninForm from './SigninForm';

describe('<Signin />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SigninForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
