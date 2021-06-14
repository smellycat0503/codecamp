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

const LoginUI = () => {
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
          ></Input__Input>
          <Warning__Input>이메일은 필수 입력입니다.</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>비밀번호</Input__Title>
          <Input__Input
            placeholder="비밀번호를 입력해주세요."
            name="password"
          ></Input__Input>
          <Warning__Input>비밀번호는 필수 입력입니다.</Warning__Input>
        </Input__Wrapper>
        <SignUpButton__Disabled disabled="disabled">
          로그인하기
        </SignUpButton__Disabled>
      </Body__Wrapper>
    </Wrapper>
  )
}

export default LoginUI
