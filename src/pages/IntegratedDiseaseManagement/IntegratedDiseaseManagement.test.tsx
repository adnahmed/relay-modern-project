import React from 'react';
import { shallow } from 'enzyme';
import IntegratedDiseaseManagement from './IntegratedDiseaseManagement';

describe('<IntegratedDiseaseManagement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IntegratedDiseaseManagement />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
