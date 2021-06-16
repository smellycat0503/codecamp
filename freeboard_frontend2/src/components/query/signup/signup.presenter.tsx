import {Email, Warning} from '@material-ui/icons'
import {
  Wrapper,
  Body__Wrapper,
  Title,
  Input__Title,
  Input__Input,
  Warning__Input,
  Input__Wrapper,
  SignUpButton__Disabled,
  Background,
  SignUpButton,
} from './signup.styles'

import Modal from './../../../components/commons/modal/Modal.container'

const SignUpUI = (props) => {
  return (
    <Wrapper>
      <Background src="/BG.png" />
      <Body__Wrapper>
        <Title>회원가입</Title>
        <Input__Wrapper>
          <Input__Title>이메일</Input__Title>
          <Input__Input
            placeholder="이메일을 입력해주세요."
            name="email"
            onChange={props.onChangeInput}
            type="text"
          ></Input__Input>
          <Warning__Input>{props.errorEmail}</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>이름</Input__Title>
          <Input__Input
            placeholder="이름을 입력해주세요."
            name="name"
            onChange={props.onChangeInput}
          ></Input__Input>
          <Warning__Input>{props.errorName}</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>비밀번호</Input__Title>
          <Input__Input
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={props.onChangeInput}
            type="password"
          ></Input__Input>
          <Warning__Input>{props.errorPassword}</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>비밀번호 확인</Input__Title>
          <Input__Input
            placeholder="비밀번호를 입력해주세요."
            name="password2"
            onChange={props.onChangeInput}
            type="password"
          ></Input__Input>
          <Warning__Input>{props.errorPassword2}</Warning__Input>
        </Input__Wrapper>
        <SignUpButton disabled={props.signUp} onClick={props.onClickSignUp}>
          회원가입하기
        </SignUpButton>
      </Body__Wrapper>
      {!props.popUp ? <Modal></Modal> : ''}
    </Wrapper>
  )
}

export default SignUpUI
