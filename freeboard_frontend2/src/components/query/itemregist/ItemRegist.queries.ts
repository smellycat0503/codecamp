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
      images
    }
  }
`

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

export const UPDATE_USED_ITEM = gql`
  mutation UPDATE_USED_ITEM(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`

export const UPLOAD_FILE = gql`
  mutation UPLOAD_FILE($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`
