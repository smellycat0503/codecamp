import {Wrapper} from './nestedReply.styles'

const NestedReplyUI = ({data, onClickTest, Test}) => {
  return (
    <Wrapper>
      <div onClick={onClickTest}>{data.contents}</div>

      {Test && <div>대댓글 입력 하고 싶다</div>}
    </Wrapper>
  )
}

export default NestedReplyUI
