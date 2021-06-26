import {gql} from '@apollo/client'

export const FETCH_USED_ITEM_QUESTION_ANSWER = gql`
  query FETCH_USED_ITEM_QUESTION_ANSWER($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      user {
        name
        _id
        createdAt
      }
    }
  }
`
export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation CREATE_USED_ITEM_QUESTION_ANSWER(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      user {
        name
        createdAt
      }
    }
  }
`

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation DELETE_USED_ITEM_QUESTION_ANSWER($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`
