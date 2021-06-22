import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'
import Navigation2UI from './Navigation2.presenter'

import {LOG_OUT_USER} from './Navigation2.queries'

const Navigation2 = () => {
  const [popUp, setPopUp] = useState(true)
  const [logout] = useMutation(LOG_OUT_USER)
  const router = useRouter()
  const onClickSignUp = () => {
    router.push(`/board/signup`)
  }

  const onClickLogin = () => {
    router.push(`/board/login`)
  }

  // const [isTrue, setIstrue] = useState(false)

  const onClickCharge = () => {
    setPopUp((prev) => !prev)
    //! 한번 누르고 화면 끈 다음에 다시 누를 시 안됨. 두번 눌러야 하는 이유-> 아마 스테이트가 한박자
    //!느려서 인 것 같음?
  }
  const onClickLogOut = async () => {
    try {
      await logout()
    } catch {}
  }
  // const AutoTrue () =>{
  //   if
  // }

  return (
    <Navigation2UI
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
      onClickCharge={onClickCharge}
      popUp={popUp}
      onClickLogOut={onClickLogOut}
    />
  )
}

export default Navigation2
