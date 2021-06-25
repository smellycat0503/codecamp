import {useMutation, useQuery} from '@apollo/client'
import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../../pages/_app'
import NestedReplyUI from './nestedReply.presenter'
import {
  FETCH_USED_ITEM_QUESTION_ANSWER,
  CREATE_USED_ITEM_QUESTION_ANSWER,
} from './nestedReply.queries'

const NestedReply = ({data}) => {
  //* 대댓글 기능들

  //* 본인 글 권한 확인
  const {accessToken, userInfo} = useContext(LayoutContext)

  //*대댓글 작성 뮤테이션
  const [answerReplyWrite] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER)

  //*대댓글 내용 담기위한 스테이트
  const [answer, setAnswer] = useState({
    contents: '',
  })

  //*대댓글 작성 인풋 감지
  const inputAnswerReply = (event) => {
    const answerContents = {
      contents: answer.contents,
      [event.target.name]: event.target.value,
    }
    setAnswer(answerContents)
  }

  //*대댓글 온클릭 시 뮤테이션 통신
  const onClickAnswerButton = async () => {
    try {
      await answerReplyWrite({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: answer.contents,
          },
          useditemQuestionId: data._id,
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const [Test, setTest] = useState(true)
  const onClickTest = () => {
    setTest((prev) => !prev)
  }
  return (
    <NestedReplyUI
      data={data}
      inputAnswerReply={inputAnswerReply}
      onClickAnswerButton={onClickAnswerButton}
      Test={Test}
      onClickTest={onClickTest}
    />
  )
}
export default NestedReply
