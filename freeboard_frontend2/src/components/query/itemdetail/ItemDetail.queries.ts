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
    }
  }
`
