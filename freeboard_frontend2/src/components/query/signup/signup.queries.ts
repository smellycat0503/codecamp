import {gql} from '@apollo/client'

export const CREATEACCOUNT = gql`
  mutation CREATEACCOUNT($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      createdAt
      updatedAt
      deletedAt
    }
  }
`
