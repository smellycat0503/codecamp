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
// export interface IProps {
//   open: any
//   handleClickOpen: any
//   handleClose: any
// }

const ModalUI = ({open, handleClickOpen, handleClose}) => {
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Modal__Wrapper>
          {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
          <Logo__Wrapper>
            <Logo src="/signuplogo.png"></Logo>
          </Logo__Wrapper>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-description">
              회원가입을 축하합니다!
            </DialogContentText> */}
            <Message>회원가입을 축하합니다!</Message>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
            {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
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
