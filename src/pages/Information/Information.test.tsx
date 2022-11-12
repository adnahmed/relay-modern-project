import React from 'react';
import { shallow } from 'enzyme';
import Information from './Information';

describe('<Information />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Information  topic="topic"/>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
