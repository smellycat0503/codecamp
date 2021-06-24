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
      _id
      user {
        _id
        email
        name
        createdAt
      }
    }
  }
`

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation DELETE_USED_ITEM_QUESTION($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation UPDATE_USED_ITEM_QUESTION(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        email
        name
      }
      createdAt
    }
  }
`
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
