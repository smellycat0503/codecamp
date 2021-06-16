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
} from './Login.styles'

const LoginUI = ({
  loginbutton,
  errorEmail,
  errorPassword,
  onClickLogin,
  onChangeInput,
}) => {
  return (
    <Wrapper>
      <Background src="/BG.png" />
      <Body__Wrapper>
        <Title src="/loginlogo.png"></Title>
        <Input__Wrapper>
          <Input__Title>이메일</Input__Title>
          <Input__Input
            placeholder="이메일을 입력해주세요."
            name="email"
            type="text"
            onChange={onChangeInput}
          ></Input__Input>
          <Warning__Input>{errorEmail}</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>비밀번호</Input__Title>
          <Input__Input
            placeholder="비밀번호를 입력해주세요."
            name="password"
            type="password"
            onChange={onChangeInput}
          ></Input__Input>
          <Warning__Input>{errorPassword}</Warning__Input>
        </Input__Wrapper>
        <SignUpButton disabled={false} onClick={onClickLogin}>
          로그인하기
        </SignUpButton>
      </Body__Wrapper>
    </Wrapper>
  )
}

export default LoginUI
