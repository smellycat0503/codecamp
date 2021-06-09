import {gql} from '@apollo/client'

export const REPLY = gql`
  query REPLY($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`

export const CREATEREPLY = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`

export const UPDATAREPLY = gql`
  mutation UPDATE(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String!
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`

export const DELETEREPLY = gql`
  mutation DELETE($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`
