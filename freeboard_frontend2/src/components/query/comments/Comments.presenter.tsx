import ReplyMapUI from './Comments.presenter2'

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
} from './Comments.styles'

const ReplyCommentUI = (props) => {
  console.log(props?.datareply?.fetchBoardComments)

  return (
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
            placeholder="비밀번호"
            onChange={props.onChangeReplyInput}
          ></ReplyPassword>
          <Star__Wrapper>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
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

        {props?.datareply?.fetchBoardComments.map((data) => (
          <ReplyMapUI data={data}></ReplyMapUI>
        ))}
      </Bottom2Wrapper>
    </Wrapper>
  )
}

export default ReplyCommentUI
