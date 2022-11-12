import React from 'react';
import { shallow } from 'enzyme';
import AuthenticationMethods from './AuthenticationMethods';

describe('<AuthenticationMethods />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AuthenticationMethods />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
