import graphql from 'babel-plugin-relay/macro'

const SignOutMutation = graphql`
  mutation SignOutMutation {
    signOut {
      ...userFragmentUser
    }
  }
`
export default SignOutMutation
