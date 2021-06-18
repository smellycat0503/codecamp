import {useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {useState} from 'react'
import withAuth from '../../commons/hocs/withAuth'
import ItemCommentUI from './ItemComment.presenter'
import Reply__List from './ItemComment.presenter.replylist'
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from './ItemComment.queries'

const ItemComment = (props) => {
  const router = useRouter()
  // console.log(router, '라우터보자')
  const [writeRely] = useMutation(CREATE_USED_ITEM_QUESTION)

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

  return (
    <>
      <ItemCommentUI
        onChangeReplyInput={onChangeReplyInput}
        onClickReply={onClickReply}
      />
      <Reply__List readReply={readReply} onLoadMore={onLoadMore} />
    </>
  )
}

export default withAuth(ItemComment)
