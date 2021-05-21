// 1번째 방법

// function TimerPage(){

// }

// export default TimerPage

// 2번째 방법

// export default function TimerPage(){

// }

import {useState} from 'react';

function TimerPage() {
  const [buttonOnOff, setbuttonOnOff] = useState(false); // aaa는 불린이 됨.
  const [count, setCount] = useState('0:00');

  function handleClickSendAuth() {
    let time = 5; //초기값주기

    const timer = setInterval(function () {
      const minute = Math.floor(time / 60);
      const second = String(time % 60).padStart(2, '0');
      time = time - 1;

      setCount(`${minute}:${second}`);
      if (time < 0) {
        setbuttonOnOff(true);
        clearInterval(timer);
        // setbuttonOnOff(true)
      }
    }, 1000);
  }

  return (
    <div>
      <div>
        <input type="text"></input>
        <button onClick={handleClickSendAuth}>인증번호 전송</button>
      </div>
      <div>
        <span>{count}</span>
        <button disabled={buttonOnOff}>인증완료</button>
      </div>
    </div>
  );
}

export default TimerPage;
