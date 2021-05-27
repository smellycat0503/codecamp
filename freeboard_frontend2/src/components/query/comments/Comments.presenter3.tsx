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

import { useState } from "react";
import { UPDATAREPLY } from "./Comments.queries";
import { useMutation } from "@apollo/client";

const replyRewriteInputChange = () => {
  const [rewriteReply] = useMutation(UPDATAREPLY);

  const [replyRewrite, SetreplyRewrite] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 5,
  });

  function onChangeReplyRewrite(event) {
    const ReplyRewriteInput = {
      ...replyRewrite,
      [event.target.name]: event.target.value,
    };
    SetreplyRewrite(ReplyRewriteInput);
  }

  async function onClickReplyRewriteInput(event) {
    try {
      await rewriteReply({
        variables: {
          updateBoardCommentInput: {
            contents: replyRewrite.contents,
            rating: replyRewrite.rating,
          },
          password: replyRewrite.password,
          boardCommentId: event.target.id,
        },
        //!updateBoardCommentInput: 이 부분은 gql에서 요구하는 부분만 넣어줘야함!
        //!boardCommentId의 경로 -> 쿼리
      });
    } catch (error) {
      alert("땡");
    }
  }

  return (
    <>
      <Writer__Info__Wrapper>
        <ReplyWriter
          name="writer"
          type="text"
          onChange={onChangeReplyRewrite}
          placeholder="작성자"
        ></ReplyWriter>
        <ReplyPassword
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChangeReplyRewrite}
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
        onChange={onChangeReplyRewrite}
      ></Content__textbox>
      <Reply__Text__Bottom__Wrapper>
        <TextCount type="text"></TextCount>
        <Reply__Rewrite__Post__Button onClick={onClickReplyRewriteInput}>
          수정하기
        </Reply__Rewrite__Post__Button>
      </Reply__Text__Bottom__Wrapper>
    </>
  );
};
export default replyRewriteInputChange;
