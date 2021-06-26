import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'
import SignUpUI from './signup.presenter'
import {CREATEACCOUNT} from './signup.queries'

const SignUp = () => {
  const [createUserAccount] = useMutation(CREATEACCOUNT)

  const [newAccount, setNewAccount] = useState({
    email: '',
    password: '',
    password2: '',
    name: '',
  })

  const [signUp, setSignUp] = useState(true)

  const [popUp, setPopUp] = useState(true)

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPassword2, setErrorPassword2] = useState('')
  const [errorName, setErrorName] = useState('')

  const onChangeInput = (event) => {
    const newAccountInfo = {
      ...newAccount,
      [event.target.name]: event.target.value,
    }
    let isTrue = [false, false, false, false]

    setNewAccount(newAccountInfo)
    console.log(newAccountInfo, 'newAccountInfo')
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

    if (!newAccountInfo.email) {
      setErrorEmail('이메일은 필수 입력입니다.')
    }

    if (newAccountInfo.email.length !== 0) {
      if (newAccountInfo.email.match(regExp) != null) {
        setErrorEmail('')
        isTrue[0] = true
      } else {
        setErrorEmail('올바른 메일 주소를 입력해주세요')
        isTrue[0] = false
      }
    }

    var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/

    if (!newAccountInfo.password) {
      setErrorPassword('비밀번호는 필수 입력입니다.')
    }

    if (newAccountInfo.password.length !== 0) {
      if (newAccountInfo.password.match(reg_pwd) !== null) {
        setErrorPassword('')
        isTrue[1] = true
      } else {
        setErrorPassword('영문, 숫자 혼합하여 6~20자리 이내로 입력해주세요.')
        isTrue[1] = false
      }
    }

    if (!newAccountInfo.name) {
      setErrorName('이름은 필수 입력입니다.')
      isTrue[2] = false
    } else {
      setErrorName('')
      isTrue[2] = true
    }

    if (newAccountInfo.password !== newAccountInfo.password2) {
      setErrorPassword2('비밀번호가 일치하지 않습니다.')
      isTrue[3] = false
    } else {
      setErrorPassword2('')
      isTrue[3] = true
    }

    if (isTrue.filter((data) => data === true).length === 4) {
      setSignUp(false)
    } else {
      setSignUp(true)
    }
    console.log(isTrue)
  }

  const onClickSignUp = async () => {
    try {
      await createUserAccount({
        variables: {
          createUserInput: {
            email: newAccount.email,
            name: newAccount.name,
            password: newAccount.password,
          },
        },
      })
      setPopUp(false)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <SignUpUI
      onChangeInput={onChangeInput}
      onClickSignUp={onClickSignUp}
      signUp={signUp}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      errorName={errorName}
      errorPassword2={errorPassword2}
      popUp={popUp}
    />
  )
}
export default SignUp
