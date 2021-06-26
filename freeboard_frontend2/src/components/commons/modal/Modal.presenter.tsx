import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {
  Modal__Wrapper,
  Logo__Wrapper,
  Logo,
  Message,
  Button__Wrapper,
  Close__Button,
} from './Modal.styles'

const ModalUI = ({open, handleClickOpen, handleClose}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Modal__Wrapper>
          <Logo__Wrapper>
            <Logo src="/signuplogo.png"></Logo>
          </Logo__Wrapper>
          <DialogContent>
            <Message>회원가입을 축하합니다!</Message>
          </DialogContent>
          <DialogActions>
            <Button__Wrapper>
              <Close__Button onClick={handleClose}>확인</Close__Button>
            </Button__Wrapper>
          </DialogActions>
        </Modal__Wrapper>
      </Dialog>
    </div>
  )
}

export default ModalUI
