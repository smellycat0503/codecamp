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
  MyMenu__Wrapper,
  Icon__UserInfo__Wrapper,
  ImgChange,
  Icon__Wrapper,
  Name__Point__Wrapper,
  UserName,
  UserPoint,
  MyMenu__Sub__Wrapper,
  MyMenu__Charge__IMG,
  MyMenu__Charge,
  Logout__IMG,
  Logout,
  Info__Wrapper,
} from './Navigation2.styles'
import React from 'react'
import Menu from '@material-ui/core/Menu'
import ModalChangeIndex from './../../modal__charge/'

import {IProps} from './Navigation2.types'

const Navigation2UI = (props: IProps) => {
  const {accessToken, userInfo} = useContext(LayoutContext)

  return (
    <Navi2Wrapper>
      <Navi2>
        <Logo src="/logo.png"></Logo>
        <Wrapper_Login_SignIn>
          {!accessToken ? (
            <>
              <Login onClick={props.onClickLogin}>로그인</Login>
              <SignUp onClick={props.onClickSignUp}>회원가입</SignUp>
            </>
          ) : (
            <>
              <UserIcon__InfoMenu__Wrapper>
                <UserIcon src="/ic_프로필.png"></UserIcon>

                <InfoMenu
                  onClick={props.handleClick}
                  src="/ic_more.png"
                ></InfoMenu>
                <Info__Wrapper>
                  <Menu
                    id="simple-menu"
                    anchorEl={props.anchorEl}
                    keepMounted
                    open={Boolean(props.anchorEl)}
                    onClose={props.handleClose}
                  >
                    <MyMenu__Wrapper>
                      <Icon__UserInfo__Wrapper>
                        <Icon__Wrapper>
                          <UserIcon
                            onClick={props.onClickCharge}
                            src="/ic_프로필.png"
                          ></UserIcon>
                          <ImgChange
                            onClick={props.handleClose}
                            src="/bt_imgchange.png"
                          ></ImgChange>
                        </Icon__Wrapper>

                        <Name__Point__Wrapper>
                          {/* <UserName>{userInfo?.name}</UserName>
                          <UserPoint>{userInfo?.userPoint?.amount} P</UserPoint> */}
                        </Name__Point__Wrapper>
                      </Icon__UserInfo__Wrapper>
                      <MyMenu__Sub__Wrapper>
                        <MyMenu__Charge__IMG src="/charge.png"></MyMenu__Charge__IMG>
                        <MyMenu__Charge onClick={props.onClickCharge}>
                          충전하기
                        </MyMenu__Charge>
                      </MyMenu__Sub__Wrapper>
                      <MyMenu__Sub__Wrapper>
                        <Logout__IMG src="/logout.png"></Logout__IMG>
                        <Logout onClick={props.onClickLogOut}>로그아웃</Logout>
                      </MyMenu__Sub__Wrapper>
                    </MyMenu__Wrapper>
                  </Menu>
                </Info__Wrapper>
              </UserIcon__InfoMenu__Wrapper>
            </>
          )}
        </Wrapper_Login_SignIn>
      </Navi2>
      {!props.popUpChargeMenu && <ModalChangeIndex />}
    </Navi2Wrapper>
  )
}

export default Navigation2UI
