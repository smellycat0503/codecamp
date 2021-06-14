import {useMutation} from '@apollo/client'
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

  const [signUp, setSignUp] = useState(false)

  const [error, setError] = useState('')

  const onChangeInput = (event) => {
    const newAccountInfo = {
      ...newAccount,
      [event.target.name]: event.target.value,
    }
    setNewAccount(newAccountInfo)
    console.log(newAccountInfo, 'newAccountInfo')

    if (
      !newAccount.email ||
      !newAccount.password ||
      !newAccount.password2 ||
      !newAccount.name
    ) {
      setError('필수 입력 사항입니다.')
    } else {
      setError('')
    }
    if (
      newAccount.email &&
      newAccount.password &&
      newAccount.password2 &&
      newAccount.name
    ) {
      setSignUp(true)
    }
  }

  const onClickSignUp = async () => {
    try {
      await createUserAccount({
        variables: {
          createUserInput: {
            email: '',
            password: '',
            name: '',
          },
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <SignUpUI
      onChangeInput={onChangeInput}
      onClickSignUp={onClickSignUp}
      signUp={signUp}
    />
  )
}

export default SignUp
