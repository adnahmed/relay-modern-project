import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './SignupForm';

describe('<SignupForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignupForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
