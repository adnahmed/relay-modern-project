import React from 'react';
import { shallow } from 'enzyme';
import PostHarvesting from './PostHarvesting';

describe('<PostHarvesting />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PostHarvesting />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
