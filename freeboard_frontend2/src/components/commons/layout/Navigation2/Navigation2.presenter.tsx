import {
  Navi2,
  Logo,
  Login,
  SignIn,
  Wrapper_Login_SignIn,
} from './Navigation2.styles'

const Navigation2UI = () => {
  return (
    <Navi2>
      <Logo src="/logo.png"></Logo>
      <Wrapper_Login_SignIn>
        <Login>로그인</Login>
        <SignIn>회원가입</SignIn>
      </Wrapper_Login_SignIn>
    </Navi2>
  )
}

export default Navigation2UI
