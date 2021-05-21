import {gql} from '@apollo/client';

export const PROFILE = gql`
  mutation bbbb($name: String, $age: Int, $school: String) {
    createProfile(name: $name, age: $age, school: $school) {
      message
    }
  }
`;
