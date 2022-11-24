import React from 'react';
import { shallow } from 'enzyme';
import SelectFormik from './SelectFormik';

describe('<SelectFormik />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
        <SelectFormik label='label' name='name'>
          <option value=''>Select</option>
          <option value='option'>Option</option>
        </SelectFormik>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
