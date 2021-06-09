import {gql} from '@apollo/client'

export const PILLOWS = gql`
  query FETCHBOARD($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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

export const GOOD = gql`
  mutation LIKEBOARD($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`

export const HATE = gql`
  mutation DISLIKEBOARD($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`
