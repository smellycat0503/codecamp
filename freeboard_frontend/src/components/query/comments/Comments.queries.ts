import { gql } from "@apollo/client";

export const REPLY = gql`
  query ZZZ($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const CREATEREPLY = gql`
  mutation QWE(
    $boardId: ID!
    $writer: String
    $password: String
    $contents: String!
    $rating: Float!
  ) {
    createBoardComment(
      createBoardCommentInput: {
        writer: $writer
        password: $password
        contents: $contents
        rating: $rating
      }
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
`;

export const UPDATAREPLY = gql`
  mutation DFG(
    $contents: String
    $rating: Float
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: { contents: $contents, rating: $rating }
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
