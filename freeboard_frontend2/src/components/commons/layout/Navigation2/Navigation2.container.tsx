import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {createContext, useState} from 'react'
import Navigation2UI from './Navigation2.presenter'

import {LOG_OUT_USER} from './Navigation2.queries'

import React from 'react'

export const Navigation2Context = createContext({
  popUpChargeMenu: true,
  setPopUpChargeMenu: (_: boolean) => {},
  // aaa: () => {}
})

const Navigation2 = () => {
  const [popUpChargeMenu, setPopUpChargeMenu] = useState(true)
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
    setPopUpChargeMenu((prev) => !prev)
    //! 한번 누르고 화면 끈 다음에 다시 누를 시 안됨. 두번 눌러야 하는 이유-> 아마 스테이트가 한박자
    //!느려서 인 것 같음?
  }
  console.log(popUpChargeMenu, '네비 안 충전버튼')

  const onClickLogOut = async () => {
    try {
      await logout()
    } catch {}
  }
  // const AutoTrue () =>{
  //   if
  // }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    // setPopUp((prev) => !prev)
  }

  // const aaa = () => {
  //   console.log('qwer')
  // }

  return (
    <Navigation2Context.Provider value={{popUpChargeMenu, setPopUpChargeMenu}}>
      <Navigation2UI
        handleClick={handleClick}
        handleClose={handleClose}
        onClickSignUp={onClickSignUp}
        onClickLogin={onClickLogin}
        onClickCharge={onClickCharge}
        popUpChargeMenu={popUpChargeMenu}
        onClickLogOut={onClickLogOut}
        setPopUpChargeMenu={setPopUpChargeMenu}
        anchorEl={anchorEl}
      />
    </Navigation2Context.Provider>
  )
}

export default Navigation2
