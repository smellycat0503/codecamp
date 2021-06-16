import {useMutation} from '@apollo/client'
import {Router} from '@material-ui/icons'
import {useRouter} from 'next/router'
import {createContext, useContext, useState} from 'react'

import LoginUI from './Login.presenter'
import {LOGIN_USER} from './Login.queries'
import {LayoutContext} from '../../../../pages/_app'
//!로긴설정8/ layout은 여기서 불러와야 하는 것!
// import {LayoutContext} from ''

// export const LayoutContext = createContext

const Login = () => {
  const router = useRouter()

  const {setAccessToken} = useContext(LayoutContext)
  //!로긴설정9

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
    console.log(loginInfo, 'loginInfo')
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
    console.log(isTrue)
  }

  const onClickLogin = async () => {
    const {data} = await loginPage({
      variables: {
        password: loginAccount.password,
        email: loginAccount.email,
      },
    })
    console.log(data.loginUser.accessToken)
    setAccessToken(data?.loginUser.accessToken)
    //!로긴설정10
    router.push(`/board/marketmain/`)
  }

  return (
    <LoginUI
      loginbutton={loginbutton}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      onClickLogin={onClickLogin}
      onChangeInput={onChangeInput}
    />
  )
}

export default Login
