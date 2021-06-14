import {
  Wrapper,
  ReplyWrapper,
  Title__Wrapper,
  Reply__Img,
  Reply__Title,
  Reply__Input,
} from './ItemComment.styled'

import Reply__List from './ItemComment.presenter.replylist'

const ItemCommentUI = () => {
  return (
    <Wrapper>
      <ReplyWrapper>
        <Title__Wrapper>
          <Reply__Img src="/ic_rate_review-24px.png"></Reply__Img>
          <Reply__Title>문의하기</Reply__Title>
        </Title__Wrapper>
        <Reply__Input placeholder="개인정보를 공유 및 요청하거나, 명회 훼손, 무단 광고, 불법 정보 우표시 모디터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></Reply__Input>
      </ReplyWrapper>
    </Wrapper>
  )
}

export default ItemCommentUI
