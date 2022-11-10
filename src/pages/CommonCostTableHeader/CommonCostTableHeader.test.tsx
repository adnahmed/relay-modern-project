import React from 'react';
import { shallow } from 'enzyme';
import CommonCostTableHeader from './CommonCostTableHeader';

describe('<CommonCostTableHeader />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommonCostTableHeader />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
