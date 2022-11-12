import React from 'react';
import { shallow } from 'enzyme';
import IntegratedWeedManagement from './IntegratedWeedManagement';

describe('<IntegratedWeedManagement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IntegratedWeedManagement />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
