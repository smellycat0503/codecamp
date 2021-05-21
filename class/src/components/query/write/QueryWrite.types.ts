export interface IProps {
  aaa?: boolean;
  //* aaa에는 불린만 들어가게됨. 그 외에는 에러 발생.
  //* aaa 뒤에 ? 들어가면 aaa자체가 있어도 되고 없어도 됨. 불림이어야 되는 점은 변하지 않음.
}
