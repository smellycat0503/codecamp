import {gql} from '@apollo/client'

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation CREATE_USED_ITEM_QUESTION(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      createdAt
    }
  }
`

export const FETCH_USED_ITEM_QUESTION = gql`
  query FETCH_USED_ITEM_QUESTION($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      contents
      createdAt
      user {
        _id
        email
        name
        createdAt
      }
    }
  }
`
