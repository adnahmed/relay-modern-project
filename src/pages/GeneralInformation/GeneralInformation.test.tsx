import React from 'react';
import { shallow } from 'enzyme';
import GeneralInformation from './GeneralInformation';

describe('<GeneralInformation />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GeneralInformation />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
