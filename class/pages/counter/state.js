import {useState} from 'react';

function CounterPage() {
  //let count = 0
  const [count, setCount] = useState(0); //스테이드 만드는 명령어. 리액트에서 제공하므로 리액트에서 가져와야함
  //[state, setState]
  // useState는 const [state, setState] 대괄호의 형태를 만들기 위한 것.
  // [] 안의 setState가 화면에 직접 나오게 하는 기능.
  // count = count + 1
  function counter() {
    setCount(count + 1);
  }

  //리턴 아래는 HTML공간. 두줄 이상일 경우 괄호 들아가.// 한줄로 묶어서가 무슨말이지.
  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>카운터증가(state)</button>
      {/* 온클릭 C는 대문자 */}
    </>
  );
}

export default CounterPage;
