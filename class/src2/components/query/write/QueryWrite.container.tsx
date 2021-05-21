//1. 컨테이너에는 주된 기능들을 넣음. 쿼리 사용을 위해 먼저 쿼리 선언.
//1-1. 경로가 프레젠터임. 부모가 자식에게 보내기 위함인가? 현재 폴더이므로
//      ./ 사용하여 경로 찾기
//2. 기존에 사용했던 인덱스 안의 기능들 가져오기. import했던 기능들도 같이 가져오자.
//5. useMutation() 괄호 안에 넣었던 gql인 PROFILE 연결을 위해 import 작성.
//8-1. 데이터 입력 유무 판별하여 true false 판별용 state 작성.
//처음엔 비어있으므로 기본값 false로 놓기. 데이터 입력 확인 시 트루 들어갈 예정.
//8-2. 텍스트 인풋에 데이터 유무에 따라 색 변화 주기 위해 컨테이너 파일에서 인풋 함수 부분 추가 작성.
//8-3. 마리오 안에 이름,나이, 학교가 다들어가면 트루.
// 빈값은 언디파인드. 언디파인드는 곧 펄스가 됨.
//6. 텍스트 인풋과 실행 기능을 자식과 연결할 props 사용.
//리턴 안의 QueryUI에서 사용한다.
// 8-4. props적용되는 부분에 트루 변경시 isTure 적용.
// 8-5!! 이 과정에서 props객체 안으로 들어감. 객체 형태.

//필요기능
//1. 데이터 써서 보내기-> gql, 뮤테이션
//2. 텍스트에 쓴 값 읽기-> event.target.value, onChange
//3. 여러값 묶어 화면에 나타내기-> state
//4. 통신기능 acync//await, try, catch
//5. 클릭 시 기능. onClick
//6. 사이트 이동 . 라우터
//*생각 못함 7. 텍스트 꽉찰때 버튼 파란색 만들기->

//1. 프로필 작성 작업. 페이지 함수 선언.
//2. 프로필 데이터 묶기 위한 스테이트 선언
//3. gql, useMutation선언
//4. 페이지 이동 기능. 유즈라우터 선언.
//4. onChange 선언. 인풋값 읽기.
//5. 클릭 시 함수. onClick 선언
//*얘는 나중에* 버튼 클릭 시 버튼 색 변경.

import {useState} from 'react';
import {PROFILE} from './QueryWrite.queries';
import {useRouter} from 'next/router';
import {useMutation} from '@apollo/client';
import Presenter from './QueryWrite.presenter';
import {
  IMutation,
  IMutationCreateProfileArgs,
} from '../../../../src/commons/types/generated/types';

//! 컴포넌트 나눌때 import Presenter from './QueryWrite.presenter' 프레젠터 부분 {}중괄호 있으면 안됨!
// import {IuseMutation} from './QueryWrite.types'

// interface Ievent {
//     event: any;
//     target: any;
// }

export default function Container() {
  const [pizza, setPizza] = useState({
    name: '',
    age: '',
    school: '',
  });

  const router = useRouter();

  ////////////////////////////////////////

  const [ham] = useMutation(PROFILE);

  const [isTrue, setIsTrue] = useState(true);

  // function disableButton(event){
  //     const pepper = {...pizza, [event.target.name]:event.target.value}
  // }

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const mush = {...pizza, [event.target.name]: event.target.value};
    //! ****[event.target.name]의 name이 프레젠터 name에 지정한 곳!!!!!
    setPizza(mush);

    if (pizza.name && pizza.age && pizza.school) {
      console.log(isTrue);
      setIsTrue(false);
    }
  }

  async function onClickRegist() {
    try {
      const result = await ham({
        variables: {...pizza, age: Number(pizza.age)},
      });
      console.log(result);
      alert('성공');
      router.push(`query4/${pizza.name}`);
    } catch (error) {
      alert('실패');
    }
  }

  return (
    <Presenter
      onChangeInput={onChangeInput}
      onClickRegist={onClickRegist}
      isTrue={isTrue}
    />
  );
}
