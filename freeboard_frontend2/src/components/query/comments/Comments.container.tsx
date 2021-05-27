import ReplyCommentUI from "./Comments.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEREPLY, REPLY, UPDATAREPLY } from "./Comments.queries";
import { useState } from "react";

export default function ReplyComment() {
  const router = useRouter();

  console.log("라우터33", router);

  const { data: datareply, refetch } = useQuery(REPLY, {
    variables: { boardId: router.query.ID },
  });
  //! 리플 컴포넌트 나누기 전과 refetch위치가 다름. 되는지 안되는지 시도.

  const [writereply] = useMutation(CREATEREPLY);

  const [rewriteReply] = useMutation(UPDATAREPLY);

  const [reply, setReply] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 5,
  });

  // const [re__reply, setRe__reply] = useState(
  //   {
  //     writer: "",
  //     password: "",
  //     contents: "",
  //     rating: 5,
  //   }
  // )

  function onChangeReplyInput(event) {
    const viva = { ...reply, [event.target.name]: event.target.value };
    setReply(viva);
    console.log("댓글", viva);
  }

  async function onClickReplyInput() {
    try {
      // const result = await writereply({
      // variables: { ...reply, boardId: router.query.ID },
      // });
      await writereply({
        variables: {
          createBoardCommentInput: {
            writer: reply.writer,
            contents: reply.contents,
            password: reply.password,
            rating: 5,
          },
          boardId: router.query.ID,
        },
      });
      //! 여기 보드ID를 어디껄 가져와야하는지 모르겠음.-> 원래글 가져오는게 맞음
      refetch();
    } catch (error) {
      alert("땡");
    }
  }

  // const [replyRewrite, SetreplyRewrite] = useState({
  //   writer: "",
  //   password: "",
  //   contents: "",
  //   rating: 5,
  // });

  // function onChangeReplyRewrite(event) {
  //   const ReplyRewriteInput = {
  //     ...replyRewrite,
  //     [event.target.name]: event.target.value,
  //   };
  //   SetreplyRewrite(ReplyRewriteInput);
  // }

  // async function onClickReplyRewriteInput(event) {
  //   try {
  //     await rewriteReply({
  //       variables: {
  //         updateBoardCommentInput: {
  //           contents: replyRewrite.contents,
  //           rating: replyRewrite.rating,
  //         },
  //         password: replyRewrite.password,
  //         boardCommentId: event.target.id,
  //       },
  //       //!updateBoardCommentInput: 이 부분은 gql에서 요구하는 부분만 넣어줘야함!
  //     });
  //   } catch (error) {
  //     alert("땡");
  //   }
  // }

  return (
    <ReplyCommentUI
      onChangeReplyInput={onChangeReplyInput}
      onClickReplyInput={onClickReplyInput}
      datareply={datareply}
      // onChangeReplyRewrite={onChangeReplyRewrite}
      // onClickReplyRewrite={onClickReplyRewriteInput}
    />
  );
}
