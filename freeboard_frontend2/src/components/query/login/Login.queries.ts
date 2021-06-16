import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
  mutation LOGIN_USER($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`
