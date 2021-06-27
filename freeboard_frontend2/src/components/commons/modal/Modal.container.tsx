import {useRouter} from 'next/router'
import React from 'react'

import ModalUI from './Modal.presenter'

const Modal = () => {
  const router = useRouter()

  const [open, setOpen] = React.useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    router.push(`/board/login/`)
  }

  return (
    <>
      <ModalUI open={open} handleClose={handleClose} />
    </>
  )
}
export default Modal
