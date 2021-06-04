import {gql} from '@apollo/client'

//쿼리 뒤에 이름 안넣어도 되는지 테스트해보기.
export const CONTENTS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`

export const BOARDCOUNT = gql`
  query {
    fetchBoardsCount
  }
`

export const COMMENTS = gql`
  query COMMENTS($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
    }
  }
`
export const BEST_POST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      createdAt
    }
  }
`
