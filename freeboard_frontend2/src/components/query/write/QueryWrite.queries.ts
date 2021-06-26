import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation CREATE_BOARD(
    $writer: String
    $password: String
    $title: String!
    $contents: String!
    $youtubeUrl: String
    $images: [String!]
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        password: $password
        title: $title
        contents: $contents
        youtubeUrl: $youtubeUrl
        images: $images
      }
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`

export const UPLOAD_FILE = gql`
  mutation UPLOADFILE($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`

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
`
