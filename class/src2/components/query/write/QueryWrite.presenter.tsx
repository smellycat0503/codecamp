//3-1. const Query와 export default QueryUI 작성.
//3-2. 리턴 뒤 html부분 가져오기.
//7-1. props가 적용되도록  query 함수 안에 porps 넣고, 각 인풋과 버튼 뒤에도 props 새로 적용.
//7-2. emotion 사용 위해 import 새로 입력. styles.js파일과 연결.
// {/* 9. presenter 리턴 부분에서 온클릭시 props적용될 aaa 작성. 여기 aaa의 이름은 상관없고 ={} 형태가 중요한건가?
//props 적용과 이모션 안의 함수 적용 두가지 용도로 쓰이는듯?*/}

//!prop?>컨테이너-> event 로 가고.데이터(맞나?)와 연결하기 위해 각 입력 부분에 name="" 입력.
//!props 는 객체 형태로 전달되므로 props.붙여 사용하기.
// 버튼 색 적용할 때 .styles파일로 프롭스 적용될 예정.
//버튼 눌렀을 시 컨테이너 패턴 활용.
// 인풋데이터 전부 입력 시 색상 변경기능 적용하기 위해 프롭스 활용->
//색상 타입 정해주기 위해 aaa=true 활용.

import {ChangeEventHandler} from 'react';
import {RegisterButton} from './QueryWrite.styles';

interface IPresenter {
  isTrue: boolean;
  onChangeInput: ChangeEventHandler<HTMLInputElement> | undefined;
  onClickRegist: any;
}

export default function Presenter(props: IPresenter) {
  return (
    <div>
      <span>이름: </span>
      <input type="text" name="name" onChange={props.onChangeInput}></input>
      <br />
      <span>나이: </span>
      <input type="text" name="age" onChange={props.onChangeInput}></input>
      <br />
      <span>학교: </span>
      <input type="text" name="school" onChange={props.onChangeInput}></input>
      <br />
      <RegisterButton
        onClick={props.onClickRegist}
        disabled={props.isTrue}
        snake={props.isTrue}
      >
        프로필 등록하기
      </RegisterButton>
    </div>
  );
}

// import {RegisterButton} from './QueryWrite.styles'

// export default function Presenter  (props)  {
//   return (
//     <div>
//       <span>이름: </span>
//       <input type="text" name = "name" onChange = {props.onChangeInput}></input><br />
//       <span>나이: </span>
//       <input type="text" name = "age" onChange = {props.onChangeInput}></input><br />
//       <span>학교: </span>
//       <input type="text" name = "school" onChange = {props.onChangeInput}></input><br />
//       <RegisterButton onClick =  {props.onClickRegist} disabled = {props.isTrue} snake = {props.isTrue}>프로필 등록하기</RegisterButton>

//     </div>
//   );
// };

{
  /* //!버튼에 disabled= {isTrue} 사용하여 버튼 비활성화 적용해보기. */
}
{
  /* <RegisterButton onClick= {props.onClickRegist} aaa={props.isTrue}>프로필 등록하기</RegisterButton> */
}
{
  /* //aaa가 타입스크립트로 바뀌면서 에러 발생. 스타일과 연결하는 부분(색깔바꾸기)= 얘가 트루인지 펄스인지 몰라서 그럼. */
}

// export default Presenter
