import {useApolloClient, useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {useContext, useState} from 'react'

import LoginUI from './Login.presenter'
import {LOGIN_USER, FETCH_USER_LOGGED_IN} from './Login.queries'
import {LayoutContext} from '../../../../pages/_app'
//!로긴설정8/ layout은 여기서 불러와야 하는 것!

const Login = () => {
  const router = useRouter()

  const {setAccessToken, setUserInfo} = useContext(LayoutContext)
  //!로긴설정9
  //!유저정보받기4 setUserInfo 추가.

  const [loginAccount, setLoginAccount] = useState({
    password: '',
    email: '',
  })

  const [loginbutton, setLoginbutton] = useState(true)

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const [loginPage] = useMutation(LOGIN_USER)

  const onChangeInput = (event) => {
    const loginInfo = {
      ...loginAccount,
      [event.target.name]: event.target.value,
    }

    let isTrue = [false, false]
    setLoginAccount(loginInfo)

    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    if (!loginInfo.email) {
      setErrorEmail('이메일은 필수 입력입니다.')
    }

    if (loginInfo.email.length !== 0) {
      if (loginInfo.email.match(regExp) != null) {
        setErrorEmail('')
        isTrue[0] = true
      } else {
        setErrorEmail('올바른 메일 주소를 입력해주세요')
        isTrue[0] = false
      }
    }

    var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/

    if (!loginInfo.password) {
      setErrorPassword('비밀번호는 필수 입력입니다.')
    }

    if (loginInfo.password.length !== 0) {
      if (loginInfo.password.match(reg_pwd) !== null) {
        setErrorPassword('')
        isTrue[1] = true
      } else {
        setErrorPassword('영문, 숫자 혼합하여 6~20자리 이내로 입력해주세요.')
        isTrue[1] = false
      }
    }

    if (isTrue.filter((data) => data === true).length === 2) {
      setLoginbutton(false)
    } else {
      setLoginbutton(true)
    }
  }

  const client = useApolloClient()
  //!유저정보받기5 / 유저 정보를 받기 위한 아폴로 통신 기능으로 예상. 아폴로클라이언트가 할당된
  //!클라이언트를 선언함으로서 어느 위치에서든 사용 가능하게 된다?
  //! 이게 gql을 axios처럼 사용 하는거라는게 무슨 뜻이지?

  const onClickLogin = async () => {
    const {data} = await loginPage({
      variables: {
        password: loginAccount.password,
        email: loginAccount.email,
      },
    })

    setAccessToken(data?.loginUser.accessToken)
    localStorage.setItem('refreshToken', 'true')
    //!로긴설정10

    // !유저정보받기6
    const userInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      //! 유저정보 gql에서 받아온 쿼리를 여기에 넣네. 이 후에 accesstoken을 또 여기에 넣는건가.
      context: {
        headers: {authorization: data?.loginUser.accessToken},
        //!여기가 액세스토큰을 유저정보쿼리에서도 넣기 위함?
      },
    })
    // console.log(userInfo, '유저정보를보자')
    setUserInfo(userInfo.data?.fetchUserLoggedIn)
    // console.log(userInfo.data?.fetchUserLoggedIn, '유저인포 확인해보자')

    router.push(`/board/marketmain/`)
  }

  const onClickGoogleLogin = () => {
    window.open('https://backend.codebootcamp.co.kr/api/login/google/callback')
  }

  return (
    <LoginUI
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      onClickLogin={onClickLogin}
      onChangeInput={onChangeInput}
      onClickGoogleLogin={onClickGoogleLogin}
    />
  )
}

export default Login
