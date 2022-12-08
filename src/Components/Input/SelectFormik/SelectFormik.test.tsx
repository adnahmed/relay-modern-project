import React from 'react';
import { shallow } from 'enzyme';
import SelectFormik from './SelectFormik';

describe('<SelectFormik />', () => {
  let component;
  const options = [
    { label: 'Select an Option', value: ''},
    { label: 'Option', value: 'option'},
  ]

  beforeEach(() => {
    component = shallow(<SelectFormik label='label' name='name' options={options}/>)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
