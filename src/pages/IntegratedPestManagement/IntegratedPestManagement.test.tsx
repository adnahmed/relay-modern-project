import React from 'react';
import { shallow } from 'enzyme';
import IntegratedPestManagement from './IntegratedPestManagement';

describe('<IntegratedPestManagement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IntegratedPestManagement />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
