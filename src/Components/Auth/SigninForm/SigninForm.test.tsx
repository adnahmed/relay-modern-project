import React, { useRef } from 'react'
import { shallow } from 'enzyme'
import { SigninForm } from './SigninForm'

describe('<Signin />', () => {
  let component

  beforeEach(() => {
    const initRef = useRef(null)
    component = shallow(<SigninForm initialRef={initRef} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
