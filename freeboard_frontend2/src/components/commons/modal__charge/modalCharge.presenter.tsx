import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import {
  ChargeMainImg,
  Wrapper,
  Main__Wrapper,
  CancelButton,
  ChargeMessage,
  ChargePiont__Wrapper,
  Input__Point,
  Select__Point__Button,
  Change__Button,
  Point__Select__Wrapper,
  Point__Wrapper,
  Point,
} from './modalCharge.styles'

const ModalChargeUI = ({
  handleClose,

  open,
  onClickCloseCharge,
  onClickChargeButton,

  isOpenSelect,
  onClickPointSelectMenu,

  onClickSelectedAmount,
  chargeResult,
}) => {
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Wrapper>
            <CancelButton
              onClick={onClickCloseCharge}
              src="/ic_cancel.png"
            ></CancelButton>
            <Main__Wrapper>
              <ChargeMainImg src="/chargemainimg.png"></ChargeMainImg>
              <ChargeMessage>충전하실 금액을 선택해주세요!</ChargeMessage>
              <ChargePiont__Wrapper>
                <Input__Point
                  value={chargeResult}
                  placeholder="포인트 선택"

                  //! 여기 인풋인 채로 금액 어떻게 넣지?
                  // onChange={inputChargePrice}
                ></Input__Point>
                <Select__Point__Button
                  src="/ic_arrow.png"
                  onClick={onClickPointSelectMenu}
                ></Select__Point__Button>
              </ChargePiont__Wrapper>
              {!isOpenSelect && (
                <Point__Select__Wrapper>
                  <Point__Wrapper>
                    <Point id="100" onClick={onClickSelectedAmount}>
                      100
                    </Point>
                  </Point__Wrapper>
                  <Point__Wrapper>
                    <Point id="500" onClick={onClickSelectedAmount}>
                      500
                    </Point>
                  </Point__Wrapper>
                  <Point__Wrapper>
                    <Point id="2000" onClick={onClickSelectedAmount}>
                      2,000
                    </Point>
                  </Point__Wrapper>
                  <Point__Wrapper>
                    <Point id="5000" onClick={onClickSelectedAmount}>
                      5,000
                    </Point>
                  </Point__Wrapper>
                </Point__Select__Wrapper>
              )}
              <Change__Button onClick={onClickChargeButton}>
                충전하기
              </Change__Button>
            </Main__Wrapper>
            <DialogContent></DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions> */}
          </Wrapper>
        </Dialog>
      </div>
    </>
  )
}

export default ModalChargeUI
