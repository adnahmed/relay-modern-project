import React from 'react';
import { shallow } from 'enzyme';
import YearSelect from './YearSelect';

describe('<YearSelect />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<YearSelect />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
