import graphql from 'babel-plugin-relay/macro'

const SignUpMutation = graphql`
  mutation SignUpMutation($user: UserCreateInput!) {
    createAccount(user: $user)
  }
`
export default SignUpMutation
