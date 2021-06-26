import {useMutation} from '@apollo/client'
import {useState} from 'react'
import NestReplyWriteUI from './nestReplyWrite.presenter'

import {
  FETCH_USED_ITEM_QUESTION_ANSWER,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from './nestReplyWrite.queries'

export default function NestReplyWrite({data, setOpenNestedReply}) {
  //*대댓글 작성 뮤테이션
  const [answerReplyWrite] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER)

  //*대댓글 내용 담기위한 스테이트
  const [answer, setAnswer] = useState({
    contents: '',
  })

  //*대댓글 작성 인풋 감지
  const onChangeAnswerReply = (event) => {
    const replyContents = {
      contents: answer.contents,
      [event.target.name]: event.target.value,
    }
    setAnswer(replyContents)
  }

  //*대댓글 작성 클릭 시 뮤테이션 통신
  //! 리패치쿼리 실패! 이유를 모르겠음
  const onClickAnswerButton = async () => {
    try {
      await answerReplyWrite({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: answer.contents,
          },
          useditemQuestionId: data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              page: 0,
              useditemQuestionId: data._id,
            },
          },
        ],
      })
      setOpenNestedReply((prev) => !prev)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <NestReplyWriteUI
      onClickAnswerButton={onClickAnswerButton}
      onChangeAnswerReply={onChangeAnswerReply}
    ></NestReplyWriteUI>
  )
}
