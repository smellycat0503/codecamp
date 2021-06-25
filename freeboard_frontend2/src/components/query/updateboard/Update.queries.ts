import {gql} from '@apollo/client'

export const UPDATE_BOARD = gql`
  mutation ZZZ(
    $title: String
    $contents: String
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: {title: $title, contents: $contents}
      password: $password
      boardId: $boardId
    ) {
      _id
      writer
      title
      contents
    }
  }
`
