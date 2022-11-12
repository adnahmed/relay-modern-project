import React from 'react';
import { shallow } from 'enzyme';
import TopicDashboard from './TopicDashboard';

describe('<DataDashboard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TopicDashboard element={<></>} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
