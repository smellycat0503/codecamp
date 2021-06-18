import {gql} from '@apollo/client'

export const FETCH_USED_ITEM = gql`
  query FETCH_USED_ITEM($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      seller {
        _id
        email
        createdAt
        name
      }
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
