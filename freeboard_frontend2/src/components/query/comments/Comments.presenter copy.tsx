import ReplyMapUI from "./Comments.presenter2";

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
  Replyed__Contents__Wrapper,
  UserIcon,
  Writed__UserID,
  Comment__Rignt,
  Star__Wrapper,
  User__Comment,
  Id__And__Star__Wrapper,
  Writed__Date,
  TextCount,
  Reply__Write__button,
  Reply__Text__Bottom__Wrapper,
  Rewrite__Reply__Wrapper,
  Rewrite__Reply__Text,
  Reply__Text__count,
  Rewrite__Reply__Text__Count__Wrapper,
  Reply__Rewrite__Post__Button,
  Test,
} from "./Comments.styles";

const ReplyCommentUI = (props) => {
  console.log(props?.datareply?.fetchBoardComments);
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
        <Rewrite__Reply__Wrapper>
          <Star__Wrapper>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
          </Star__Wrapper>
          <Rewrite__Reply__Text type="text"></Rewrite__Reply__Text>
          <Rewrite__Reply__Text__Count__Wrapper>
            <Reply__Text__count type="text"></Reply__Text__count>
            <Reply__Rewrite__Post__Button>
              수정하기
            </Reply__Rewrite__Post__Button>
          </Rewrite__Reply__Text__Count__Wrapper>
        </Rewrite__Reply__Wrapper>
        {props?.datareply?.fetchBoardComments.map((data) => (
          <ReplyMapUI data={data}></ReplyMapUI>
        ))}
        {/* <Replyed__Contents__Wrapper>
          <UserIcon src="/useri.png"></UserIcon>
          <Comment__Rignt>
            <Id__And__Star__Wrapper>
              <Writed__UserID>노원두</Writed__UserID>

              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
            </Id__And__Star__Wrapper>
            <User__Comment>
              진짜 유익하고 필요한 정보인 것 같아요~!
            </User__Comment>
            <Writed__Date>2021.02.22</Writed__Date>
          </Comment__Rignt>
        </Replyed__Contents__Wrapper> */}
      </Bottom2Wrapper>
    </Wrapper>
  );
};

export default ReplyCommentUI;
