import React, { useRef } from 'react'
import { shallow } from 'enzyme'
import { SignupForm } from './SignupForm'

describe('<SignupForm />', () => {
  let component

  beforeEach(() => {
    const initRef = useRef(null)
    component = shallow(<SignupForm initialRef={initRef} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
