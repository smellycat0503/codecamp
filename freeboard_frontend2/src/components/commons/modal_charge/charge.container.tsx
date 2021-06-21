import ChargePageUI from './charge.presenter'
import React, {useState} from 'react'

const ChargePage = () => {
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ChargePageUI
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </>
  )
}

export default ChargePage
