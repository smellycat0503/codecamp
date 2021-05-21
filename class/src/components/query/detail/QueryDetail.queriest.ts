import {gql} from '@apollo/client';

export const Sonic = gql`
  query eggman($mario: String) {
    fetchProfile(name: $mario) {
      name
      age
      school
    }
  }
`;
