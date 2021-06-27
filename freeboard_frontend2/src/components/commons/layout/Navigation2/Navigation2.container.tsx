import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {createContext, useState} from 'react'
import Navigation2UI from './Navigation2.presenter'

import {LOG_OUT_USER} from './Navigation2.queries'

import React from 'react'

export const Navigation2Context = createContext({
  popUpChargeMenu: true,
  setPopUpChargeMenu: (_: boolean) => {},
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

  const onClickCharge = () => {
    setPopUpChargeMenu((prev) => !prev)
  }

  const onClickLogOut = async () => {
    try {
      await logout()
    } catch {}
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
        anchorEl={anchorEl}
      />
    </Navigation2Context.Provider>
  )
}

export default Navigation2
