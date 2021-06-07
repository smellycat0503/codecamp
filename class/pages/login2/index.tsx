import {gql, useMutation} from '@apollo/client'
import {useState} from 'react'

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE)

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onClickLogin = async () => {
    try {
      const result = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      })
      console.log(result.data?.loginUserExample.accessToken)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <input type="text" onChange={onChangeEmail} />
      <br />
      <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  )
}

export default LoginPage
