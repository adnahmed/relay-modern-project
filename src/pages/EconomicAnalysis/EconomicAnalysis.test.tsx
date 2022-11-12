import React from 'react';
import { shallow } from 'enzyme';
import EconomicAnalysis from './EconomicAnalysis';

describe('<EconomicAnalysis />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EconomicAnalysis />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
