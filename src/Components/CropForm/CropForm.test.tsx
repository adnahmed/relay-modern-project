import React from 'react';
import { shallow } from 'enzyme';
import CropForm from './CropForm';

describe('<CropForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CropForm cropId='1'/>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
