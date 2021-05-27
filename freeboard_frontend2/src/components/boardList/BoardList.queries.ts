import { gql } from "@apollo/client";

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
`;
