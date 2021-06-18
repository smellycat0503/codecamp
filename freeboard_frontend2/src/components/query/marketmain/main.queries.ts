import {gql} from '@apollo/client'

export const USED_ITEM_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      price
      remarks
    }
  }
`

export const USED_ITEMS = gql`
  query USED_ITEMS($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      name
      _id
      remarks
      contents
      price
      tags
      seller {
        _id
        email
        name
        createdAt
      }
    }
  }
`
