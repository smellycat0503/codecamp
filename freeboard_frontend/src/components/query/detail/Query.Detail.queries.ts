import { gql } from "@apollo/client";

export const PILLOWS = gql`
  query ZZZ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
    }
  }
`;

export const GOOD = gql`
  mutation ZZZ($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const HATE = gql`
  mutation ZXC($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const REPLY = gql`
  query ZZZ($boardId: ID!) {
    fetchBoardComments(boardId: $boardId)
  }
`;

export const CREATEREPLY = gql`
  mutation QWE(
    $writer: String
    $password: String
    $contents: String
    $rating: Float!
    $boardId: ID!
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
      user
      createdAt
      updatedAt
    }
  }
`;

// const STROKES = gql`
//   mutation ZZZ(
//     $title: String
//     $contents: String
//     $password: String
//     $boardId: ID!
//   ) {
//     updateBoard(
//       updateBoardInput: { title: $title, contents: $contents }
//       password: $password
//       boardId: $boardId
//     ) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;
