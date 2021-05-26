import {RegisterButton} from './QueryWrite.styles'

const QueryUI = (props) => {
  return (
    <div>
      <span>이름: </span>
      <input
        type="text"
        name="name"
        ref={props.inputRef}
        onChange={props.onChangeInput}
      ></input>
      <span>나이: </span>
      <input type="text" name="age" onChange={props.onChangeInput}></input>
      <span>학교: </span>
      <input type="text" name="school" onChange={props.onChangeInput}></input>
      <RegisterButton onClick={props.onClickRegist} aaa={props.isTrue}>
        프로필 등록하기
      </RegisterButton>
      <button onClick={props.handleChangeCcc}>CCC변경하기</button>
      {/* <RegisterButton onClick= {props.onClickRegist} aaa={props.isTrue}>프로필 등록하기</RegisterButton> */}
      {/* //*aaa가 타입스크립트로 바뀌면서 에러 발생. 스타일과 연결하는 부분(색깔 바꾸기)= 얘가 트루인지 펄스인지 몰라서 그럼. */}
    </div>
  )
}

export default QueryUI
