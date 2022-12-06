import graphql from "babel-plugin-relay/macro";

export default graphql`
    mutation SignupFormGraphQLQuery($user: UserCreateInput!) {
        createAccount(user: $user) 
    }
`