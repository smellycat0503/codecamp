import {useApolloClient, useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {useContext, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import withAuth from '../../commons/hocs/withAuth'
import ItemCommentUI from './ItemComment.presenter'
import Reply__List from './ItemComment.presenter.replylist'
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
  DELETE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from './ItemComment.queries'

// const updateButtonInit = [
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
// ]

//! 스테이트를 초기값으로 돌리기 위함!!

const ItemComment = (props) => {
  const {accessToken, userInfo} = useContext(LayoutContext)
  // console.log(accessToken, '액세스토큰')
  // console.log(userInfo._id, '유저정보')

  const router = useRouter()
  // console.log(router, '라우터보자')
  const [writeRely] = useMutation(CREATE_USED_ITEM_QUESTION)

  const [deleteQuestion] = useMutation(DELETE_USED_ITEM_QUESTION)

  const [updateQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)

  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: readReply,
    refetch,
    fetchMore,
  } = useQuery(FETCH_USED_ITEM_QUESTION, {
    variables: {
      page: Number(currentPage),
      useditemId: router.query.ID,
    },
  })

  // console.log(readReply, '댓글쿼리')
  const [reply, setReply] = useState({
    contents: '',
  })

  //! 얘를 첫 댓글과 수정 시 둘다 써도 상관없을거 같음.
  const onChangeReplyInput = (event) => {
    const replyContents = {
      contents: reply.contents,
      [event.target.name]: event.target.value,
    }
    setReply(replyContents)
    // console.log(replyContents, '댓글잘들어가나')
  }

  const onClickReply = async () => {
    try {
      await writeRely({
        variables: {
          createUseditemQuestionInput: {contents: reply.contents},
          useditemId: router.query.ID,
        },
      })
      //! 따로 경로 지정할 필요 없어 await 앞에 변수 지정 안해도 될 것 같음.
      setReply({contents: ''})
      refetch()
    } catch (error) {
      alert(error.message)
    }
  }

  // console.log(readReply?.fetchUseditemQuestions.length, '댓글 길이를 보자')

  const onLoadMore = () => {
    if (readReply?.fetchUseditemQuestions.length % 10 !== 0) return
    fetchMore({
      variables: {
        page: Math.floor(readReply?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => ({
        fetchUseditemQuestions: [
          ...prev.fetchUseditemQuestions,
          ...fetchMoreResult.fetchUseditemQuestions,
        ],
      }),
    })
  }

  // //!아래부터 수정 삭제 위한 유저정보 받는 과정 똑같이 적용해야하나 테스트-> 필요없을지도.
  // const client = useApolloClient()
  // console.log(readReply?.fetchUseditemQuestions, '리드리플라이 콘솔로그')
  // console.log(userInfo._id, 'userInfo._id 콘솔로그')

  const onClickDeleteQuestion = async (event) => {
    // console.log(event.target, '댓글아이디찾자')
    // console.log(event.target.id, '댓글아이디찾자')
    // console.log(userInfo._id)
    if (event.target.name !== userInfo._id) return
    else {
      try {
        await deleteQuestion({
          variables: {
            // useditemQuestionId: userInfo._id,
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

  // const [updateButton, setUpdataButton] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ])

  const [updateButton, setUpdataButton] = useState(true)

  // UpdateButton

  const onClickEditButton = () => {
    // const newUpdateButton = [...updateButton]
    //! 콘솔에서 배열 값 바꾸기 연습해보기!!
    // newUpdateButton[event.target.id] = true
    // console.log(event.target.id, '이벤트타겟아디')
    //! 이 단계에서 이미 불린값을 덮어쓴거임!
    // if(event.target.id === ?)
    //! 여기서 조건을 내가 클릭한 댓글의 아이디가 무언가 일치할 시에만 적용되게 해야할 것 같음.
    setUpdataButton(false)
    // setUpdataButton(newUpdateButton)

    // [event.target.id=true]
  }

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
      setUpdataButton(true)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <ItemCommentUI
        onChangeReplyInput={onChangeReplyInput}
        onClickReply={onClickReply}
      />
      <Reply__List
        readReply={readReply}
        onLoadMore={onLoadMore}
        onClickDeleteQuestion={onClickDeleteQuestion}
        onClickEditButton={onClickEditButton}
        updateButton={updateButton}
        onChangeReplyInput={onChangeReplyInput}
        onClickUpdataReply={onClickUpdataReply}
        // userInfo={userInfo}
      />
    </>
  )
}

export default withAuth(ItemComment)
