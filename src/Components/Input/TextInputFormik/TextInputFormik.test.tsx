import React from 'react';
import { shallow } from 'enzyme';
import TextInputFormik from './TextInputFormik';

describe('<TextInputFormik />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TextInputFormik label='label' name='name' type='text' placeholder='placeholder'/>)
  });

  test('It should mount', () => {
  });
});
