//gql앞에 export넣기.
//gql import 작성.

import {gql} from '@apollo/client'

export const raison = gql`
  query fetchBoard($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`

//전체를 조회해야 하며, gql에 ()가 없없으므로 이름과 $ 사용할 필요 없다.
