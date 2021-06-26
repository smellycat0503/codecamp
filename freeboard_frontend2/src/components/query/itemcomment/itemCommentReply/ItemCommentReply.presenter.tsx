import {
  Wrapper,
  ReplyWrapper,
  Title__Wrapper,
  Reply__Img,
  Reply__Title,
  Reply__Input,
  ReplyCount__Regint__Button__Wrapper,
  Reply__Count,
  Regist__Button,
} from './ItemCommentReply.styled'
import Reply__List from '../itemCommentReplyList/ItemCommentReplyList.container'

import InfiniteScroll from 'react-infinite-scroller'

//*댓글 입력 및 등록 페이지
const ItemCommentUI = ({
  onChangeReplyInput,
  onClickReply,
  readReply,
  onLoadMore,
}) => {
  return (
    <Wrapper>
      <ReplyWrapper>
        <Title__Wrapper>
          <Reply__Img src="/ic_rate_review-24px.png"></Reply__Img>
          <Reply__Title>문의하기</Reply__Title>
        </Title__Wrapper>
        <Reply__Input
          onChange={onChangeReplyInput}
          name="contents"
          placeholder="개인정보를 공유 및 요청하거나, 명회 훼손, 무단 광고, 불법 정보 우표시 모디터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></Reply__Input>
        <ReplyCount__Regint__Button__Wrapper>
          <Reply__Count></Reply__Count>
          <Regist__Button onClick={onClickReply}>문의하기</Regist__Button>
        </ReplyCount__Regint__Button__Wrapper>
      </ReplyWrapper>
      {readReply?.fetchUseditemQuestions.length && (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {readReply?.fetchUseditemQuestions.map((data, index) => (
            <Reply__List data={data} key={index}></Reply__List>
          ))}
        </InfiniteScroll>
      )}
    </Wrapper>
  )
}

export default ItemCommentUI
