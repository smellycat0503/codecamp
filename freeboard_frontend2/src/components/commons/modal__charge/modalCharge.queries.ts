import {gql} from '@apollo/client'

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation CREATE_POINT_TRANSACTION_OF_LOADING($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
      status
      impUid
    }
  }
`
