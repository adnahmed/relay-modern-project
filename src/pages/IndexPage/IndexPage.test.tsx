import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from './IndexPage';

describe('<IndexPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IndexPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
