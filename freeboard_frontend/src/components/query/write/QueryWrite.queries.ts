import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation abc(
    $writer: String
    $password: String
    $title: String!
    $contents: String!
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        password: $password
        title: $title
        contents: $contents
      }
    ) {
      _id
      writer
      title
      contents
    }
  }
`;

//*시작
// import { gql } from "@apollo/client";

// export const DRAGONBALL = gql`
//   mutation ZZZ(
//     $writer: String
//     $password: String
//     $title: String!
//     $contents: String!
//   ) {
//     createBoard(
//       createBoardInput: {
//         writer: $writer
//         password: $password
//         title: $title
//         contents: $contents
//       }
//     ) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
//*끝
