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

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      contents
      price
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
    }
  }
`
