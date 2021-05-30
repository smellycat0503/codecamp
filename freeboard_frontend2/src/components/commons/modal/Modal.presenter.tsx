// import {IProps} from './'

import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ModalUI = (props) => {
  return (
    <DialogTitle
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'등록 완료'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          게시물이 정상적으로 등록되었습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={props.handleClose} color="primary">
            Disagree
          </Button> */}
        <Button onClick={props.handleClose} color="primary" autoFocus>
          확인
        </Button>
      </DialogActions>
    </DialogTitle>
  )
}

export default ModalUI
