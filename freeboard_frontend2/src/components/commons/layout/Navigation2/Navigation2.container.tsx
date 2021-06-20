import {useRouter} from 'next/router'
import {useState} from 'react'
import Navigation2UI from './Navigation2.presenter'

const Navigation2 = () => {
  const router = useRouter()
  const onClickSignUp = () => {
    router.push(`/board/signup`)
  }

  // const [isTrue, setIstrue] = useState(false)

  return <Navigation2UI onClickSignUp={onClickSignUp} />
}

export default Navigation2
