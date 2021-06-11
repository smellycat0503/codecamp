import {
  Navi2,
  Logo,
  Login,
  SignUp,
  Wrapper_Login_SignIn,
  Navi2Wrapper,
} from './Navigation2.styles'

const Navigation2UI = (props) => {
  return (
    <Navi2Wrapper>
      <Navi2>
        <Logo src="/logo.png"></Logo>
        <Wrapper_Login_SignIn>
          <Login>로그인</Login>
          <SignUp onClick={props.onClickSignUp}>회원가입</SignUp>
        </Wrapper_Login_SignIn>
      </Navi2>
    </Navi2Wrapper>
  )
}

export default Navigation2UI
