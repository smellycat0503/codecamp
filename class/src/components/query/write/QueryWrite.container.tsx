import {useMutation, gql} from '@apollo/client'
import {assertAbstractType} from 'graphql'
import {argsToArgsConfig} from 'graphql/type/definition'
import {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/router'
import QueryUI from './QueryWrite.presenter'
import {PROFILE} from './QueryWrite.queries'
import {Modal} from '@material-ui/core'

const Query = () => {
  const router = useRouter()

  const [aaaa, setAaaa] = useState({
    name: '',
    age: '',
    school: '',
  })
  const [isTrue, setIsTure] = useState(false)

  const [createProfile] = useMutation(PROFILE)

  async function onClickRegist() {
    try {
      const result = await createProfile({
        variables: {...aaaa, age: Number(aaaa.age)},
      })

      console.log(result)
      alert(result.data.createProfile.message)
      router.push(`/query/${aaaa.name}`)
    } catch (error) {
      alert('error.message')
    }
  }
  function onChangeInput(event) {
    const cccc = {
      ...aaaa,
      [event.target.name]: event.target.value,
    }
    setAaaa(cccc)
    //빈값은 언디파인드, 언디파인드는 곧 펄스.
    if (aaaa.name && aaaa.age && aaaa.school) {
      setIsTure(true)
    }
  }

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const [testState, setTestState] = useState(1)

  const inputRef = useRef<HTMLInputElement>(null)

  const [ccc, setCcc] = useState(123)

  // useEffect(() => {
  //   inputRef.current.focus()
  //   // setTestState((prev) => prev + 1)
  //   // console.log(testState)
  //   // console.log('useEffect가 실행되었습니다.')
  // }, [])

  //셋ccc사용함수
  const handleChangeCcc = () => {
    setCcc(345)
  }

  console.log('1111111111111111111111')

  return (
    <>
      {/* {open && <Modal handleClose={handleClose} />} */}
      <QueryUI
        inputRef={inputRef}
        onClickRegist={onClickRegist}
        onChangeInput={onChangeInput}
        handleChangeCcc={handleChangeCcc}
        isTrue={isTrue}
      />
    </>
  )
}
export default Query
