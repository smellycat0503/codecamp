import {useMutation, gql} from '@apollo/client';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {assertAbstractType} from 'graphql';

export default function ProfilePage2() {
  //문제 - 프로필란에 입력되는 항목들을 서버에 저장. 프로필 등록 클릭 시 다음페이지에서도 해당 항목이 적용되야함.
  // gql활용 예정이므로 playground에서 데이터와 형태 확인하기.

  //1-1.먼저 text 입력값을 불러오도록 state 활용해보자. 같은 용도(객체)이므로 스프레드 고려하여 하나로 만들기.
  //여기서 useState괄호 안은 입력될 형태를 하나로 묶어 지정하기. 괄호 안에 객체이므로 {}중괄호 빼먹지 말기.중괄호까지가 포함된것.

  const [apple, setApple] = useState({
    name: '',
    age: '',
    school: '',
  });

  //1-2. apple 안의 입력값을 읽는 함수 선언.
  // 변수 banana 선언하여, 키와 값에 뭐가 들어왔는지 감지해야함.
  // 여기서 키에는 []를 써야함. 없으면 값이 되어버림. 키로 만들기 위한 JS에서의 약속.
  function onChangeInput(event) {
    //banana {}를 적용시키기 위한 중괄호 안의 형태, 용도와 활용법 물어보기.
    const banana = {...apple, [event.target.name]: event.target.value};

    setApple(banana);
  }

  //2. gql 사용을 위해 gql, mutation 호출하기.
  //2-1. 여기서 사용되는 gql 데이타의 형태를 먼저 할당.-> 이런 표현이 맞나?
  //mutation 바로 뒤 부터 추가되는 부분, cat ($name~)여기는 왜 쓰는걸까.
  const PROFILE = gql`
    mutation cat($name: String, $age: Int, $school: String) {
      createProfile(name: $name, age: $age, school: $school) {
        message
      }
    }
  `;

  //2-2. 뮤테이션 실행하기 위한 작성.
  //const [] 는 뮤테이션 실행하기 위한 이름이므로 아무거나 써도 된다.
  //useMutation() 괄호 안에는 앞에 gql 할당한 것을 넣기.
  const [gorila] = useMutation(PROFILE);

  //2-3. 사이트 이동을 위한 라우터 작성.
  const router = useRouter();

  //3. 이제 버튼 클릭 시 데이터가 전송되는 기능 작성해야함.뮤테이션에 async/await 적용하기.
  //  try,catch 통해 성공 및 실패 시 함수 작성.
  //  variable는 playground에서 ()안에 내용이 있을 때 필요한 것.
  async function onClickRegist() {
    try {
      const result = await gorila({
        variables: {...apple, age: Number(apple.age)},
      });
      console.log(result);
      alert('성공메세지');
      router.push(`/query2/${apple.name}`);
      // 작성한 이름으로 들어가져야하므로.
    } catch (error) {
      alert('실패메세지');
    }
  }
  //여기 name이 크게 적용 안되는 거 같음.
  return (
    <div>
      <span>이름: </span>
      <input type="text" name="name" onChange={onChangeInput}></input>
      <br />
      <span>나이: </span>
      <input type="text" name="age" onChange={onChangeInput}></input>
      <br />
      <span>학교: </span>
      <input type="text" name="school" onChange={onChangeInput}></input>
      <br />
      <button onClick={onClickRegist}>프로필 등록하기</button>
    </div>
  );
}
