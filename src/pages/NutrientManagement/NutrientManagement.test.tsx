import React from 'react';
import { shallow } from 'enzyme';
import NutrientManagement from './NutrientManagement';

describe('<NutrientManagement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NutrientManagement />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
