import {useState} from 'react';

function TimerPage() {
  const [count, setCount] = useState('0:00');
  const [onoff, setOnOff] = useState(false);

  function handleClickSendAuth() {
    let time = 5; //초기값주기

    const timer = setInterval(function () {
      const minute = Math.floor(time / 60);
      const second = String(time % 60).padStart(2, '0');

      if (time > 0) {
        time = time - 1;
        setCount(`${minute}:${second}`);
      }
      if (time === 0) {
        clearInterval(timer);
        setOnOff(true);
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
        <button disable={onoff}>인증완료</button>
      </div>
    </div>
  );
}

export default TimerPage;
