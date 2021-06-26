import {useMutation, useQuery} from '@apollo/client'
import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../../pages/_app'
import NestedReplyUI from './nestedReply.presenter'
import {
  FETCH_USED_ITEM_QUESTION_ANSWER,
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from './nestedReply.queries'

const NestedReply = ({commentReply, commentId}) => {
  //* 대댓글 기능들

  //* 본인 글 권한 확인
  const {accessToken, userInfo} = useContext(LayoutContext)

  // //*대댓글 작성 뮤테이션
  // const [answerReplyWrite] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER)

  // //*대댓글 내용 담기위한 스테이트
  // const [answer, setAnswer] = useState({
  //   contents: '',
  // })

  // //*대댓글 작성 인풋 감지
  // const inputAnswerReply = (event) => {
  //   const answerContents = {
  //     contents: answer.contents,
  //     [event.target.name]: event.target.value,
  //   }
  //   setAnswer(answerContents)
  // }

  // //*대댓글 온클릭 시 뮤테이션 통신
  // const onClickAnswerButton = async () => {
  //   try {
  //     await answerReplyWrite({
  //       variables: {
  //         createUseditemQuestionAnswerInput: {
  //           contents: answer.contents,
  //         },
  //         useditemQuestionId: data._id,
  //       },
  //     })
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  // const [Test, setTest] = useState(true)
  // const onClickTest = () => {
  //   setTest((prev) => !prev)
  // }

  //!
  //*대댓글 삭제

  const [deleteAnswer] = useMutation(DELETE_USED_ITEM_QUESTION_ANSWER)

  const onClickDeleteButton = async () => {
    try {
      await deleteAnswer({
        variables: {
          useditemQuestionAnswerId: commentReply._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              page: 0,
              useditemQuestionId: commentId,
            },
          },
        ],
      })
    } catch (error) {
      alert(error.message)
    }
  }

  // console.log(commentReply, '대댓글map적용data')
  // console.log(accessToken)

  //?대댓글 수정

  //*대댓글 수정 뮤테이션
  const [updateAnswer] = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER)

  //*대댓글 아이콘 클릭 스테이트
  const [isUpdate, setIsUpdate] = useState(false)

  //*대댓글 내용 담기위한 스테이트
  const [answer, setAnswer] = useState({
    contents: '',
  })
  //*대댓글 수정 인풋 감지
  const onChangeAnswerReply = (event) => {
    const replyContents = {
      contents: answer.contents,
      [event.target.name]: event.target.value,
    }
    setAnswer(replyContents)
  }

  // console.log(answer, '대댓글수정인풋')

  //*대댓글 수정 아이콘 클릭 함수
  const onClickEditIcon = () => {
    setIsUpdate((prev) => !prev)
  }

  //*대댓글 수정 버튼 클릭 함수
  const onClickUpdateButton = async () => {
    try {
      await updateAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: answer.contents,
          },
          useditemQuestionAnswerId: commentReply._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              page: 0,
              useditemQuestionId: commentId,
            },
          },
        ],
      })
      setIsUpdate((prev) => !prev)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <NestedReplyUI
      commentReply={commentReply}
      onClickDeleteButton={onClickDeleteButton}
      onClickEditIcon={onClickEditIcon}
      isUpdate={isUpdate}
      onClickUpdateButton={onClickUpdateButton}
      onChangeAnswerReply={onChangeAnswerReply}
      // inputAnswerReply={inputAnswerReply}
      // onClickAnswerButton={onClickAnswerButton}
      // Test={Test}
      // onClickTest={onClickTest}
    />
  )
}
export default NestedReply
