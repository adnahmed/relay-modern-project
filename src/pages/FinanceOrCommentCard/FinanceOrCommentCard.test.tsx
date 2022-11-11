import React from 'react';
import { shallow } from 'enzyme';
import FinanceOrCommendCard from './FinanceOrCommendCard';

describe('<DataDashboard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FinanceOrCommendCard element={<></>} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
