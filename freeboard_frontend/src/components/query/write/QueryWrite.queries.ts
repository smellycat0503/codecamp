import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation abc(
    $writer: String
    $password: String
    $title: String!
    $contents: String!
    $youtubeUrl: String
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        password: $password
        title: $title
        contents: $contents
        youtubeUrl: $youtubeUrl
      }
    ) {
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
