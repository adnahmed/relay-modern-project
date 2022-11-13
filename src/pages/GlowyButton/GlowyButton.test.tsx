import React from 'react';
import { shallow } from 'enzyme';
import GlowyButton from './GlowyButton';

describe('<GlowyButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GlowyButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
