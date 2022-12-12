/* eslint-disable */
import {SigninForm} from './SigninForm'
import {useRef} from 'react'

export default {
  title: 'SigninForm',
}

export const Default = () => {
  const initRef = useRef(null)
  return <SigninForm initialRef={initRef} />
}

Default.story = {
  name: 'default',
}
