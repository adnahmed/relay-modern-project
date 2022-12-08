import React from 'react';
import { shallow } from 'enzyme';
import AdministratorDashboard from './AdministratorDashboard';

describe('<AdministratorDashboard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AdministratorDashboard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
