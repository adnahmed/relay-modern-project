/* eslint-disable */
import {SignupForm} from './SignupForm'
import {useRef} from 'react'

export default {
  title: 'SignupForm',
}

export const Default = () => {
  const initRef = useRef(null)
  return <SignupForm initialRef={initRef} />
}

Default.story = {
  name: 'default',
}
