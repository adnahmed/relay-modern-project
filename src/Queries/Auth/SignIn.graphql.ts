import graphql from 'babel-plugin-relay/macro'

const SignInQuery = graphql`
  query SignInQuery($email: String, $mobilePhone: Int, $password: String!) {
    login(email: $email, mobilePhone: $mobilePhone, password: $password)
  }
`
export default SignInQuery