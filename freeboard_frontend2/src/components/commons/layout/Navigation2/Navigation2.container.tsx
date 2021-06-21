import {useRouter} from 'next/router'
import {useState} from 'react'
import Navigation2UI from './Navigation2.presenter'

const Navigation2 = () => {
  const [popUp, setPopUp] = useState(true)

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
  }

  return (
    <Navigation2UI
      onClickSignUp={onClickSignUp}
      onClickLogin={onClickLogin}
      onClickCharge={onClickCharge}
      popUp={popUp}
    />
  )
}

export default Navigation2
