import {
  Wrapper,
  Login,
  BodyWrapper,
  SubTitle,
  IdContent,
  ErrorID,
  ErrorPw,
  LoginButton,
  PwContent,
} from '../../styles/Login.styles';

import {useState} from 'react';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errorId, SeterrorId] = useState('');
  const [errorPw, SeterrorPw] = useState('');

  function login() {
    console.log(email);
    console.log(pw);
    //     if(email.indexOf("@") === -1){
    //     alert("이메일 주소를 입력해주세요.")
    //     // console.log("로그인입니다.")
    //     if(pw.length < 8 || pw.length >16){
    //         alert("비밀번호를 정확히 입력해주세요.")
    //     }
    // }
  }
  function emailChange(event) {
    const temp = event.target.value;
    setEmail(temp);
    // console.log("이메일이 변경된 것 같습니다.")
  }
  function passwordChange(event) {
    const temp2 = event.target.value;
    setPw(temp2);
    // console.log("비밀번호가 변경된 것 같습니다.")
  }
  function errorMessage() {
    if (email.indexOf('@') === -1) {
      SeterrorId('!이메일을 정확히 입력해주세요.');
    }

    if (pw.length < 8 || pw.length > 16) {
      SeterrorPw('!비밀번호를 정확히 입력해주세요.');
    }
  }
  // function errorMessagePw(){
  // }
  return (
    <Wrapper>
      <Login>로그인</Login>
      <BodyWrapper>
        <SubTitle>아이디</SubTitle>
        <IdContent type="text" onChange={emailChange}></IdContent>
        <ErrorID>{errorId}</ErrorID>
        <SubTitle>비밀번호</SubTitle>
        <PwContent type="password" onChange={passwordChange}></PwContent>
        <ErrorPw>{errorPw}</ErrorPw>
        <LoginButton onClick={errorMessage}>로그인</LoginButton>
      </BodyWrapper>
    </Wrapper>
  );
}
export default LoginPage;
