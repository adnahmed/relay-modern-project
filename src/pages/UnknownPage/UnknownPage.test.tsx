import React from 'react';
import { shallow } from 'enzyme';
import UnknownPage from './UnknownPage';

describe('<UnknownPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<UnknownPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
