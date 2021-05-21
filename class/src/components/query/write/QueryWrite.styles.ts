import styled from '@emotion/styled';
//* aaa에는 불린만 들어가게됨. 그 외에는 에러 발생.
//* aaa 뒤에 ? 들어가면 aaa자체가 있어도 되고 없어도 됨. 불린이어야 되는 점은 변하지 않음.
// interface IProps {
//     aaa?:boolean
// }
import {IProps} from './QueryWrite.types';

//todo 타입스크립트 변환 시 에러 발생. aaa의 타입을 정해주기 위해 IProps사용. 앞에 대문자 I가 들어갔을 뿐이고 이름은 자유롭게.

export const RegisterButton = styled.button`
  //이모션 선언한 변수의 맨앞은 대문자!
  /* background-color: yellow; */
  //*aaa가 타입스크립트로 바뀌면서 에러 발생. 스타일과 연결하는 부분(색깔 바꾸기)=> 얘가 트루인지 펄스인지 몰라서 그럼.
  /* background-color: ${(props) => (props.aaa === true ? 'blue' : 'yellow')} */
  background-color: ${(props: IProps) =>
    props.aaa === true ? 'blue' : 'yellow'};
`;
//이모션 선언한 변수의 맨앞은 대문자!
