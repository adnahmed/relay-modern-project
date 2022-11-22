import React from 'react';
import { shallow } from 'enzyme';
import LocaleSelection from './LocaleSelection';

describe('<LocaleSelection />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LocaleSelection />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
