import {useContext} from 'react'
import {LayoutContext} from '../../../../../pages/_app'
import {
  Navi2,
  Logo,
  Login,
  SignUp,
  Wrapper_Login_SignIn,
  Navi2Wrapper,
  UserIcon__InfoMenu__Wrapper,
  UserIcon,
  InfoMenu,
} from './Navigation2.styles'

const Navigation2UI = (props) => {
  const {accessToken, userInfo} = useContext(LayoutContext)

  return (
    <Navi2Wrapper>
      <Navi2>
        <Logo src="/logo.png"></Logo>
        <Wrapper_Login_SignIn>
          {!accessToken ? (
            <>
              <Login>로그인</Login>
              <SignUp onClick={props.onClickSignUp}>회원가입</SignUp>
            </>
          ) : (
            <>
              <UserIcon__InfoMenu__Wrapper>
                <UserIcon src="/ic_프로필.png"></UserIcon>
                <InfoMenu src="/ic_more.png"></InfoMenu>
              </UserIcon__InfoMenu__Wrapper>
            </>
          )}
        </Wrapper_Login_SignIn>
      </Navi2>
    </Navi2Wrapper>
  )
}

export default Navigation2UI
