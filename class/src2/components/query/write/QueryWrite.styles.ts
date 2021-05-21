//10. QueryWrite.style.js파일에서 import 작성.
//    이모션 맨앞 글자 대문자임 주의.
//    왜 props.aaa일까. aaa = {props.isTure}인건 알겠는데 이게 왜 저 형태인건지 모르것음.
//    트우일 시 블루, 아니면 노랑.
//여기서도 한번 더 객채화 돠어 프롭스.aaa가 들어감.


// 이모션 사용하기위해 스타일 프롬 이모션 선언.
// 타입스크립트 적용 위해 {IProps} 적용해보기.


import {IProps} from './QueryWrite.types';

import styled from '@emotion/styled'


export const RegisterButton = styled.button`
    background-color: ${(props: IProps)=> props.snake === true ? 'blue' : 'yellow'};
`
// import styled from '@emotion/styled' 

// export const RegisterButton = styled.button`
//     background-color: ${(props)=>(props.snake) === true ? 'blue' : 'yellow'};

// `


