import {useRouter} from 'next/router'
import {useState} from 'react'
import ModalUI from './Modal.presenter'

const Modal = () => {
  const router = useRouter()

  const [a, setA] = useState('')
  //!! 모달 작업 과정.

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    router.push(`/board/${a}`)
    //! 3. 팝업 뜬 후 확인 버튼 누른 다음에 다음 화면으로 넘어가야 하기 때문에 셋오픈이 false가 될 때 라우터푸쉬 적용.
  }
  return (
    <ModalUI
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
    />
  )
}

export default Modal
