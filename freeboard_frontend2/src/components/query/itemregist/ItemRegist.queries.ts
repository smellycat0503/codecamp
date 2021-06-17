import {gql} from '@apollo/client'

export const CREATE_USED_ITEM = gql`
  mutation CREATE_USED_ITEM($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
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
