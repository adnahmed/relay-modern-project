import React from 'react';
import { shallow } from 'enzyme';
import HarvestAndPostHarvest from './HarvestAndPostHarvest';

describe('<HarvestAndPostHarvest />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HarvestAndPostHarvest />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
