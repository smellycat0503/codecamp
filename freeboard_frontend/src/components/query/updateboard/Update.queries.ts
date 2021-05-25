import { gql } from "@apollo/client";

export const UPDATE_BOARD = gql`
  mutation ZZZ(
    $title: String
    $contents: String
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: { title: $title, contents: $contents }
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
    }
  }
`;
// mutation ZZZ(
//     $title: String
//     $contents: String
//     $password: String
//     $boardId: ID!
//! ZZZ: container에서 내가 이렇게 받을거야, 받아서 updateBoard 너한테 내려줄게
//   ) {
//     updateBoard(
//       updateBoardInput: { title: $title, contents: $contents }
//       boardId: $boardId
//       password: $password
//! updateBoard(api)야 받았으면 이렇게 백에 전달해줘 함으로서 아래 적어논거 받아와
//     ) {
//       _id
//       writer
//       title
//       contents
//! 백엔드에서 이걸 받아와.
//     }
//   }
