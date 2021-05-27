import { gql } from "@apollo/client";

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

export const GOOD = gql`
  mutation ZZZ($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const HATE = gql`
  mutation ZXC($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
