import {useState} from 'react';

function SendauthPage() {
  //let token = '000000'
  const [token, setToken] = useState('000000'); //토큰의 기본값설정.
  // [state, setState]
  // useState는 const [state, setState] 대괄호의 형태를 만들기 위한 것.
  // [] 안의 setState가 화면에 직접 나오게 하는 기능.
  // useState('000000') -> 괄호 안 내용이 [state]의 기본 값이 됨.

  function sendAuth() {
    //setState() -> 리액트에서의 문법. 괄호 안에 함수 내용 적용.
    setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'));
  }

  return (
    <>
      <span>{token}</span>
      <button onClick={sendAuth}>인증번호 전송</button>
    </>
    // 리액트에서의 리턴은 <>혹은 <div>로 감싸줘야한다.
  );
}

export default SendauthPage;
