import graphql from 'babel-plugin-relay/macro'

const userFragment = graphql`
  fragment userFragmentUser on User {
    id
    firstName
    lastName
    email
    mobilePhone
    roles
    country
    region
  }
`
export default userFragment
