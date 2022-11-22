import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchBox />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
