import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import {
  Reply__And__Nested__Reply__Wrapper,
  Reply__Contents__Wrapper,
  UserIcon__UserInfo__Wrapper,
  UserIcon,
  UserInfo__Reply__Content__Wrapper,
  Reply__UserName,
  Reply__Content,
  Reply__Date,
  Delete__Button,
  Edit__Buttom,
  Reply__Edit__Wrapper,
  Reply__Edit__Input,
  Reply__Edit__Count__Wrapper,
  Reply__Edit__count,
  Reply__Edit__Button,
  Line,
  Delete__Edit__Wrapper,
  Nested__Reply__Button,
} from './ItemComment.styled'

import {
  UPDATE_USED_ITEM_QUESTION,
  DELETE_USED_ITEM_QUESTION,
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from './ItemComment.queries'
import {useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {getDate} from '../../../commons/libraries/utils'

import NestedReply from './ItemComment.presenter.replylist.nested'

//* 댓글 맵 내용 조회, 수정, 삭제 페이지
const ReplylistItem = ({data}) => {
  //*id 경로 확인용
  const router = useRouter()

  //*본인 글 권한 확인
  const {accessToken, userInfo} = useContext(LayoutContext)

  //!댓글 쓰기 뮤테이션/ 삭제 예정
  const [writeRely] = useMutation(CREATE_USED_ITEM_QUESTION)

  //*댓글 수정 뮤테이션
  const [updateQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)

  //*댓글 수정 용 스테이트
  const [reply, setReply] = useState({
    contents: '',
  })

  //*댓글 삭제 뮤테이션
  const [deleteQuestion] = useMutation(DELETE_USED_ITEM_QUESTION)

  //*댓글 삭제 후 리패치쿼리 시 적용?
  const [currentPage, setCurrentPage] = useState(1)

  //* 해당 댓글과 유저 정보 일치 여부 확인 변수
  const isOwner = data.user._id === userInfo?._id

  //*글 수정 아이콘 클릭 시 불린 값 적용/ 기본 값 true
  //! 얘가 맵으로 각 댓글마다 뿌려져야 함!!
  const [isupdateReply, setIsupdateReply] = useState(true)

  //*댓글 수정 시 내용 감지 인풋 함수
  const onChangeReplyInput = (event) => {
    const replyContents = {
      contents: reply.contents,
      [event.target.name]: event.target.value,
    }
    setReply(replyContents)
  }

  //*글 수정 아이콘 클릭 함수
  const onClickEditButton = () => {
    setIsupdateReply(false)
  }

  //*댓글 수정 내용 입력 후 수정하기 버튼 클릭 함수/ 댓글 수정 뮤테이션 통신
  const onClickUpdataReply = async (event) => {
    try {
      await updateQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: reply.contents,
          },
          useditemQuestionId: event.target.id,
        },
      })
      setIsupdateReply(true)
    } catch (error) {
      alert(error.message)
    }
  }

  //*댓글 삭제 아이콘 클릭 함수/ 댓글 삭제 뮤테이션 통신
  const onClickDeleteQuestion = async (event) => {
    if (event.target.name !== userInfo._id) return
    else {
      try {
        await deleteQuestion({
          variables: {
            useditemQuestionId: event.target.id,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION,
              variables: {
                page: Number(currentPage),
                useditemId: router.query.ID,
              },
            },
          ],
        })
      } catch (error) {
        alert(error.message)
      }
    }
  }

  const [openNestedReply, setOpenNestedReply] = useState(true)

  const onClickNestedReplyButton = () => {
    setOpenNestedReply((prev) => !prev)
  }

  return (
    <>
      <Reply__And__Nested__Reply__Wrapper>
        <Reply__Contents__Wrapper>
          <UserIcon__UserInfo__Wrapper>
            <UserIcon src="/user40.png"></UserIcon>
            <UserInfo__Reply__Content__Wrapper>
              <Reply__UserName>{data.user.name}</Reply__UserName>
              {!isupdateReply && (
                <Reply__Edit__Wrapper id={data._id}>
                  <Reply__Edit__Input
                    onChange={onChangeReplyInput}
                    name="contents"
                  ></Reply__Edit__Input>
                  <Reply__Edit__Count__Wrapper>
                    <Reply__Edit__count></Reply__Edit__count>
                    <Reply__Edit__Button
                      onClick={onClickUpdataReply}
                      id={data._id}
                      //! 댓글 내용 입력 후 수정하기 버튼 클릭 시의 위치에서 id를 찾아야 한다.
                    >
                      수정하기
                    </Reply__Edit__Button>
                  </Reply__Edit__Count__Wrapper>
                </Reply__Edit__Wrapper>
              )}
              {isupdateReply && (
                <>
                  <Reply__Content>{data.contents}</Reply__Content>
                  <Reply__Date>{getDate(data.createdAt)}</Reply__Date>
                </>
              )}
            </UserInfo__Reply__Content__Wrapper>
          </UserIcon__UserInfo__Wrapper>

          {isupdateReply && isOwner ? (
            <>
              <Delete__Edit__Wrapper>
                <Edit__Buttom
                  onClick={onClickEditButton}
                  id={data._id}
                  src="/editicon.png"
                ></Edit__Buttom>
                <Delete__Button
                  name={data.user._id}
                  //!삭제 시 댓글의 작성자와 로그인한 유저 정보의 아이디가 일치함을 name으로 확인!
                  //!{isupdateReply && isOwner} 이 조건으로 해야 각 댓글에 IsTure 값이 뜨는거고
                  //!{isupdateReply ? A : B(isOwner ? C : D)}일 경우에는 IsTrue가 맵으로 적용이 안되는건가?
                  id={data._id}
                  src="/deleteicon.png"
                  onClick={onClickDeleteQuestion}
                ></Delete__Button>
              </Delete__Edit__Wrapper>
            </>
          ) : (
            <Nested__Reply__Button src="/nestedreply.png"></Nested__Reply__Button>
          )}
        </Reply__Contents__Wrapper>
        <NestedReply />
      </Reply__And__Nested__Reply__Wrapper>
      {/* {!isupdateReply ? '' : <Line></Line>} */}
    </>
  )
}

export default ReplylistItem
