import { useState } from "react";
import { UPDATAREPLY } from "./Comments.queries";
import { useMutation } from "@apollo/client";
import {
  Bottom2Wrapper,
  Wrapper,
  ReplyTopWrapper,
  Replyicon,
  ReplyTitle,
  ReplyWriter,
  ReplyPassword,
  Writer__Info__Wrapper,
  Content__textbox,
  Star__Wrapper,
  TextCount,
  Reply__Write__button,
  Reply__Text__Bottom__Wrapper,
  Rewrite__Reply__Wrapper,
  Rewrite__Reply__Text,
  Reply__Text__count,
  Rewrite__Reply__Text__Count__Wrapper,
  Reply__Rewrite__Post__Button,
  Test,
  Star,
  Replyed__Contents__Wrapper,
  UserIcon,
  Writed__UserID,
  Comment__Rignt,
  User__Comment,
  Id__And__Star__Wrapper,
  Writed__Date,
  Rewrite__Button,
  Delete__Button,
  Rewrite__And__Delete__Wrapper,
} from "./Comments.styles";

const ReplyMapUI = ({ data }) => {
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
    // console.log("댓글수정", ReplyRewriteInput);
  }

  async function onClickReplyRewritePost(event) {
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

  const [isUpdate, setIsUptate] = useState(false);

  const handleIsUpdate = () => {
    setIsUptate(true);
    //! setIsUptate((prev) => !prev);
  };

  return (
    <>
      {isUpdate ? (
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
            <Reply__Rewrite__Post__Button
              id={data._id}
              onClick={onClickReplyRewritePost}
            >
              수정하기
            </Reply__Rewrite__Post__Button>
          </Reply__Text__Bottom__Wrapper>
        </>
      ) : (
        <Replyed__Contents__Wrapper>
          <UserIcon src="/useri.png"></UserIcon>
          <Comment__Rignt>
            <Id__And__Star__Wrapper>
              <Writed__UserID>{data.writer}</Writed__UserID>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Rewrite__And__Delete__Wrapper>
                <Rewrite__Button
                  onClick={handleIsUpdate}
                  id={data._id}
                  src="/rewrite.png"
                ></Rewrite__Button>
                <Delete__Button src="/delete.png"></Delete__Button>
              </Rewrite__And__Delete__Wrapper>
            </Id__And__Star__Wrapper>
            <User__Comment>{data.contents}</User__Comment>
            <Writed__Date>{data.createdAt}</Writed__Date>
          </Comment__Rignt>
        </Replyed__Contents__Wrapper>
      )}
    </>
  );
};

export default ReplyMapUI;
