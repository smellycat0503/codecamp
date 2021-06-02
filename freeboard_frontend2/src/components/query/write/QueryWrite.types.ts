export interface IProps {
  onChangeInput: any
  onClickPost: any
  error: any
  data?: any
  handleClickOpen: any
  handleClose: any
  open: boolean
  inputRef: any
  //*여기는 컨테이너에서 넘어온 것들을 그대로 가져오면 됨.
  //*잘 모르는건 일단 임의로 any 설정. 나중에 하나하나 고쳐보자.
}
