import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
  mutation LOGIN_USER($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`

export const FETCH_USER_LOGGED_IN = gql`
  query FETCH_USER_LOGGED_IN {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`
