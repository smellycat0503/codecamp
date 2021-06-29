// import {Reply__List__Wrapper} from './ItemComment.styled'
import {useRouter} from 'next/router'
import {
  FETCH_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from './ItemCommentReplyList.queries'
import ReplyListUI from './ItemCommentReplyList.presenter'
import {useMutation, useQuery} from '@apollo/client'
import {useContext, useState} from 'react'
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from '../../../../commons/types/generated/types'
import {LayoutContext} from '../../../../../pages/_app'
//* 댓글 목록/ 맵, 인피니트스크롤 적용 페이지

//* 실제 댓글을 뿌려주는 곳 & 대댓글 불러오는 곳
const Reply__List = ({data}) => {
  const router = useRouter()
  //* 댓글 삭제 뮤테이션
  const [deleteReply] = useMutation(DELETE_USED_ITEM_QUESTION)

  //* 댓글 삭제 버튼 클릭 함수
  const onClickDeleteReply = async () => {
    try {
      await deleteReply({
        variables: {useditemQuestionId: data._id},
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: {
              page: 1,
              useditemId: router.query.ID,
            },
          },
        ],
      })
    } catch (error) {
      alert(error.message)
    }
  }

  //* 댓글 수정 뮤테이션
  const [isUpdate, setIsUpdate] = useState(true)

  const [updateReply] = useMutation(UPDATE_USED_ITEM_QUESTION)

  //*댓글 스테이트 선언
  const [reply, setReply] = useState({
    contents: '',
  })

  //*댓글 아이콘 클릭 함수
  const onClickEditIcon = () => {
    setIsUpdate((prev) => !prev)
  }

  //*댓글 입력 감지 / 얘를 첫 댓글과 수정 시 둘다 써도 상관없을거 같음/ 두번 사용함
  const onChangeReplyInput = (event) => {
    const replyContents = {
      contents: reply.contents,
      [event.target.name]: event.target.value,
    }
    setReply(replyContents)
  }

  //* 댓글 수정하기 버튼 클릭 함수
  const onClickUpdataReply = async () => {
    try {
      await updateReply({
        variables: {
          updateUseditemQuestionInput: {
            contents: reply.contents,
          },
          useditemQuestionId: data._id,
        },
      })
      setIsUpdate((prev) => !prev)
    } catch (error) {
      alert(error.message)
    }
  }

  //?본인 글 권한 확인
  const {accessToken, userInfo} = useContext(LayoutContext)

  //@ts-ignore
  const isOwner = data.user._id !== userInfo?._id

  // console.log(data.user._id, '댓글유저아이디')
  // console.log(userInfo, '로긴유저정보')

  //*대댓글 쿼리
  const {data: answerData} = useQuery<
    IQuery,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWER, {
    variables: {
      //@ts-ignore
      page: 0,
      useditemQuestionId: data._id,
    },
  })

  //*대댓글 아이콘 클릭 시 스테이트
  //! 얘는 아이콘 클릭 시와 작성 완료 시 두번 적용. 작성 완료는 nestReplyWrite 컴포넌트에 위치
  const [openNestedReply, setOpenNestedReply] = useState(true)

  //*대댓글 아이콘 클릭 함수
  const onClickNestedReplyButton = () => {
    setOpenNestedReply((prev) => !prev)
  }

  // console.log(answerData, 'answerData')

  //!인피니트스크롤 대댓글은 필요 없나?
  // const onLoadMore = () => {
  //   if (answerData?.fetchUseditemQuestionAnswers.length % 10 !== 0) return
  //   fetchMore({
  //     variables: {
  //       page: Math.floor(answerData?.fetchUseditemQuestionAnswers.length / 10) + 1,
  //     },
  //     updateQuery: (prev, {fetchMoreResult}) => ({
  //       fetchUseditemQuestionAnswers: [
  //         ...prev.fetchUseditemQuestionAnswers,
  //         ...fetchMoreResult.fetchUseditemQuestionAnswers,
  //       ],
  //     }),
  //   })
  // }

  return (
    <>
      <ReplyListUI
        answerData={answerData}
        data={data}
        onClickDeleteReply={onClickDeleteReply}
        onClickEditIcon={onClickEditIcon}
        onChangeReplyInput={onChangeReplyInput}
        onClickUpdataReply={onClickUpdataReply}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        isOwner={isOwner}
        openNestedReply={openNestedReply}
        onClickNestedReplyButton={onClickNestedReplyButton}
        setOpenNestedReply={setOpenNestedReply}
      ></ReplyListUI>
    </>
  )
}

export default Reply__List
