import ReplyCommentUI from './Comments.presenter'
import {useRouter} from 'next/router'
import {useMutation, useQuery} from '@apollo/client'
import {CREATEREPLY, REPLY} from './Comments.queries'
import {useState} from 'react'

export default function ReplyComment() {
  const router = useRouter()

  const {data: datareply, refetch} = useQuery(REPLY, {
    variables: {boardId: router.query.ID},
  })
  //! 리플 컴포넌트 나누기 전과 refetch위치가 다름. 되는지 안되는지 시도.

  const [writereply] = useMutation(CREATEREPLY)

  const [reply, setReply] = useState({
    writer: '',
    password: '',
    contents: '',
    rating: 0,
  })

  function onChangeReplyInput(event) {
    const viva = {...reply, [event.target.name]: event.target.value}
    setReply(viva)
  }

  async function onClickReplyInput() {
    try {
      await writereply({
        variables: {
          createBoardCommentInput: {
            writer: reply.writer,
            contents: reply.contents,
            password: reply.password,
            rating: Number(reply.rating),
          },
          boardId: router.query.ID,
        },
      })
      //! 여기 보드ID를 어디껄 가져와야하는지 모르겠음.-> 원래글 가져오는게 맞음
      refetch()
    } catch (error) {
      alert('땡')
    }
  }

  //!별점 도전!

  // 마우스 호버 됬을때 함수
  const onMouseEnterHover = (event) => {
    setReply({...reply, rating: event.target.id})
    // console.log(reply, "호버")
  }

  //마우스가 별에서 떠났을 시 함수
  const onMouseLeaveHover = () => {
    // setReply({...reply, rating: 0})
  }

  //마우스로 별을 클릭했을 시
  const onSaveRating = (event) => {
    setReply({...reply, rating: event.target.id})
    // console.log(reply)
  }

  return (
    <ReplyCommentUI
      reply={reply}
      onChangeReplyInput={onChangeReplyInput}
      onClickReplyInput={onClickReplyInput}
      datareply={datareply}
      onMouseEnterHover={onMouseEnterHover}
      onMouseLeaveHover={onMouseLeaveHover}
      onSaveRating={onSaveRating}
    />
  )
}
