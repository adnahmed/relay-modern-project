import React from 'react';
import { shallow } from 'enzyme';
import ManageAlerts from './ManageAlerts';

describe('<ManageAlerts />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ManageAlerts />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
