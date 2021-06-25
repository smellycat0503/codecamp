// import {Reply__List__Wrapper} from './ItemComment.styled'
import {useRouter} from 'next/router'
import {
  FETCH_USED_ITEM_QUESTION_ANSWER,
  CREATE_USED_ITEM_QUESTION_ANSWER,
} from './ItemCommentReplyList.queries'
import ReplyListUI from './ItemCommentReplyList.presenter'
import {useMutation, useQuery} from '@apollo/client'
import {useState} from 'react'
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from '../../../../commons/types/generated/types'
//*댓글 목록/ 맵, 인피니트스크롤 적용 페이지

//* 실제 댓글을 뿌려주는 곳 & 대댓글 불러오는 곳
const Reply__List = ({data}) => {
  const router = useRouter()

  //   //*본인 글 권한 확인
  //   const {accessToken, userInfo} = useContext(LayoutContext)
  //*대댓글 쿼리
  const {data: answerData} = useQuery<
    IQuery,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWER, {
    variables: {
      page: 0,
      useditemQuestionId: data._id,
    },
  })

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
  //*대댓글 아이콘 클릭 시 스테이트
  const [openNestedReply, setOpenNestedReply] = useState(true)

  //*대댓글 아이콘 클릭 함수
  const onClickNestedReplyButton = () => {
    setOpenNestedReply((prev) => !prev)
  }
  return (
    <>
      <ReplyListUI answerData={answerData} data={data}></ReplyListUI>
    </>
  )
}

export default Reply__List
