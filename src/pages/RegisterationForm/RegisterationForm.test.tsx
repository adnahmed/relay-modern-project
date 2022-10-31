import React from 'react';
import { shallow } from 'enzyme';
import RegisterationForm from './RegisterationForm';

describe('<RegisterationForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RegisterationForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
