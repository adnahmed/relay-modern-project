import React from 'react';
import { shallow } from 'enzyme';
import LaborManagement from './LaborManagement';

describe('<LaborManagement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LaborManagement />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
