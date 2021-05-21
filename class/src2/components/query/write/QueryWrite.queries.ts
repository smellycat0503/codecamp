//4-1. gql부분 가져오기.
//query파일에는 원래 gql만 가져오는건가?
//4-2. import 부분 입력.
//4-3. const 앞에 export 추가해야함.
import {gql} from '@apollo/client'

export const PROFILE = gql`
  mutation ZZZ($name: String, $age: Int, $school: String) {
    createProfile(name: $name, age: $age, school: $school)
    {
      message
    }
  }
`;
