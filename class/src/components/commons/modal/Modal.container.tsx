import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import Presenter from './Modal.presenter'

const ModalContainer = () => {
  const handleClickOpen = () => {
    setOpen(true)
  }

  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Presenter
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
    />
  )
}

export default ModalContainer
