import {useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'
import withAuth from '../../../commons/hocs/withAuth'
import ItemCommentUI from './ItemCommentReply.presenter'
import {
  FETCH_USED_ITEM_QUESTION,
  CREATE_USED_ITEM_QUESTION,
} from './ItemCommentReply.queries'

//* 댓글 입력 및 댓글 불러오기
const ItemComment = () => {
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)

  //*댓글 클릭 시 리패치 위해 유즈쿼리 선언. 리패치만을 위한건데 variables까지 필요할까?
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

  //*댓글 쓰기 뮤테이션
  const [writeRely] = useMutation(CREATE_USED_ITEM_QUESTION)

  //*댓글 스테이트 선언
  const [reply, setReply] = useState({
    contents: '',
  })

  //*댓글 입력 감지 / 얘를 첫 댓글과 수정 시 둘다 써도 상관없을거 같음.
  const onChangeReplyInput = (event) => {
    const replyContents = {
      contents: reply.contents,
      [event.target.name]: event.target.value,
    }
    setReply(replyContents)
  }

  //*댓글 등록. 뮤테이션 통신.
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

  console.log(readReply?.fetchUseditemQuestions)

  // //*인피니트스크롤 함수/ 쿼리모어 및 업데이트쿼리 합치기
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

  return (
    <>
      <ItemCommentUI
        onChangeReplyInput={onChangeReplyInput}
        onClickReply={onClickReply}
        readReply={readReply}
        onLoadMore={onLoadMore}
      />
    </>
  )
}

export default withAuth(ItemComment)
