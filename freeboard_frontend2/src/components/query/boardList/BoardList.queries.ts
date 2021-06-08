import {gql} from '@apollo/client'

//쿼리 뒤에 이름 안넣어도 되는지 테스트해보기.
export const CONTENTS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
      contents
    }
  }
`

export const BOARDCOUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`

export const COMMENTS = gql`
  query COMMENTS($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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
