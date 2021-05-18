//10. QueryWrite.style.js파일에서 import 작성.
//    이모션 맨앞 글자 대문자임 주의.
//    왜 props.aaa일까. aaa = {props.isTure}인건 알겠는데 이게 왜 저 형태인건지 모르것음.
//    트우일 시 블루, 아니면 노랑.
import styled from '@emotion/styled'

export const RegisterButton = styled.button`
    background-color:${(props) => props.isTrue === true ? 'blue' : 'yellow'}
`
//여기서도 한번 더 객채화 돠어 프롭스.aaa가 들어감.