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
