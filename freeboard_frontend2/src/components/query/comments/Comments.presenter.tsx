import ReplyMapUI from './Comments.presenter2'
import {REPLY} from './Comments.queries'
import {
  Bottom2Wrapper,
  Wrapper,
  ReplyTopWrapper,
  Replyicon,
  ReplyTitle,
  ReplyWriter,
  ReplyPassword,
  Star,
  Writer__Info__Wrapper,
  Content__textbox,
  Star__Wrapper,
  TextCount,
  Reply__Write__button,
  Reply__Text__Bottom__Wrapper,
  All_Wrapper,
} from './Comments.styles'
import InfiniteScroll from 'react-infinite-scroller'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {IQuery} from '../../../commons/types/generated/types'

const ReplyCommentUI = (props) => {
  // console.log(props?.datareply?.fetchBoardComments)
  const router = useRouter()

  const {data: datareply, fetchMore} = useQuery<IQuery>(REPLY, {
    variables: {
      boardId: String(router.query.ID),
    },
  })
  // console.log(datareply)
  console.log(datareply?.fetchBoardComments, '댓글쿼리를 보자')

  //!무한스크롤 도전
  const onLoadMore = () => {
    if (datareply?.fetchBoardComments.length % 10 !== 0) return
    //! 페이지가 1일때는 로드모어하지마/ 글 10개미만

    fetchMore({
      variables: {
        page: Math.floor(datareply?.fetchBoardComments.length / 10) + 1,
        // boardId: router.query.ID,
        // console.log(datareply?.fetchBoardComments.length / 10, '댓글길이를보자')
      },

      updateQuery: (prev, {fetchMoreResult}) => ({
        fetchBoardComments: [
          ...prev.fetchBoardComments,
          ...fetchMoreResult.fetchBoardComments,
        ],
      }),
    })
  }

  return (
    <All_Wrapper>
      <Wrapper>
        <Bottom2Wrapper>
          <ReplyTopWrapper>
            <Replyicon src="/vector.png"></Replyicon>
            <ReplyTitle>댓글</ReplyTitle>
          </ReplyTopWrapper>
          <Writer__Info__Wrapper>
            <ReplyWriter
              name="writer"
              type="text"
              onChange={props.onChangeReplyInput}
              placeholder="작성자"
            ></ReplyWriter>
            <ReplyPassword
              name="password"
              type="password"
              placeholder="비밀번호1"
              onChange={props.onChangeReplyInput}
            ></ReplyPassword>
            <Star__Wrapper>
              {[1, 2, 3, 4, 5].map((index) => (
                <Star
                  id={String(index)}
                  src={props.reply.rating >= index ? '/ystar.png' : '/star.png'}
                  onMouseEnter={props.onMouseEnterHover}
                  onMouseLeave={props.onMouseLeaveHover}
                  onClick={props.onSaveRating}
                  //!()=> 형태는 인자가 event일때 줄여서 쓸 수 있다. event가 아닌 다른 인자일 경우에 저 형태를 사용.
                ></Star>
              ))}
            </Star__Wrapper>
          </Writer__Info__Wrapper>
          <Content__textbox
            type="text"
            placeholder="개인정보 어쩌고고"
            name="contents"
            onChange={props.onChangeReplyInput}
          ></Content__textbox>
          <Reply__Text__Bottom__Wrapper>
            <TextCount type="text"></TextCount>
            <Reply__Write__button onClick={props.onClickReplyInput}>
              등록하기
            </Reply__Write__button>
          </Reply__Text__Bottom__Wrapper>
          <InfiniteScroll loadMore={onLoadMore} hasMore={true} height={400}>
            {props?.datareply?.fetchBoardComments.map((data) => (
              <ReplyMapUI data={data}></ReplyMapUI>
            ))}
          </InfiniteScroll>
        </Bottom2Wrapper>
      </Wrapper>
    </All_Wrapper>
  )
}

export default ReplyCommentUI
