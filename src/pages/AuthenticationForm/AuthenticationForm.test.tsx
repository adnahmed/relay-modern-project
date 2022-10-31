import React from 'react';
import { shallow } from 'enzyme';
import AuthenticationForm from './AuthenticationForm';

describe('<AuthenticationForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AuthenticationForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
