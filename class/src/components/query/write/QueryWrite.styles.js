import styled from '@emotion/styled'

export const RegisterButton = styled.button`
//이모션 선언한 변수의 맨앞은 대문자!
    /* background-color: yellow; */
    background-color: ${(props) => props.aaa === true ? 'blue' : 'yellow'}
`
//이모션 선언한 변수의 맨앞은 대문자!