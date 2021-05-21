function CounterPage() {
  let count = 0;
  function counter() {
    count = count + 1;
    console.log(count);
  }

  //리턴 아래는 HTML공간. 두줄 이상일 경우 괄호 들아가.// 한줄로 묶어서가 무슨말이지.
  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>카운터증가.</button>
      {/* 온클릭 C는 대문자 */}
    </>
  );
}

export default CounterPage;
