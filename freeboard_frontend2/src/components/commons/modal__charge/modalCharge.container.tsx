import {useState} from 'react'
import ModalChargeUI from './modalCharge.presenter'

const ModalCharge = () => {
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <ModalChargeUI
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
    />
  )
}

export default ModalCharge
