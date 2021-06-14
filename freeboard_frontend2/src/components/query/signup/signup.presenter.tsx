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
          ></Input__Input>
          <Warning__Input>이메일은 필수 입력입니다.</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>이름</Input__Title>
          <Input__Input
            placeholder="이름을 입력해주세요."
            name="name"
            onChange={props.onChangeInput}
          ></Input__Input>
          <Warning__Input>이메일은 필수 입력입니다.</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>비밀번호</Input__Title>
          <Input__Input
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={props.onChangeInput}
          ></Input__Input>
          <Warning__Input>비밀번호는 필수 입력입니다.</Warning__Input>
        </Input__Wrapper>
        <Input__Wrapper>
          <Input__Title>비밀번호 확인</Input__Title>
          <Input__Input
            placeholder="비밀번호를 입력해주세요."
            name="password2"
            onChange={props.onChangeInput}
          ></Input__Input>
          <Warning__Input>비밀번호는 필수 입력입니다.</Warning__Input>
        </Input__Wrapper>
        {!props.SignUp ? (
          <SignUpButton__Disabled disabled="disabled">
            회원가입하기
          </SignUpButton__Disabled>
        ) : (
          <SignUpButton onClick={props.onClickSignUp}>
            회원가입하기
          </SignUpButton>
        )}
      </Body__Wrapper>
    </Wrapper>
  )
}

export default SignUpUI
