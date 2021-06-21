import {useMutation, useQuery} from '@apollo/client'
import {
  Wrapper,
  ReplyWrapper,
  Title__Wrapper,
  Reply__Img,
  Reply__Title,
  Reply__Input,
  ReplyCount__Regint__Button__Wrapper,
  Reply__Count,
  Regist__Button,
} from './ItemComment.styled'
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from './ItemComment.queries'
import {useState} from 'react'
import {useRouter} from 'next/router'

//*댓글 입력 및 등록 페이지
const ItemCommentUI = () => {
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

  return (
    <Wrapper>
      <ReplyWrapper>
        <Title__Wrapper>
          <Reply__Img src="/ic_rate_review-24px.png"></Reply__Img>
          <Reply__Title>문의하기</Reply__Title>
        </Title__Wrapper>
        <Reply__Input
          onChange={onChangeReplyInput}
          name="contents"
          placeholder="개인정보를 공유 및 요청하거나, 명회 훼손, 무단 광고, 불법 정보 우표시 모디터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></Reply__Input>
        <ReplyCount__Regint__Button__Wrapper>
          <Reply__Count></Reply__Count>
          <Regist__Button onClick={onClickReply}>문의하기</Regist__Button>
        </ReplyCount__Regint__Button__Wrapper>
      </ReplyWrapper>
    </Wrapper>
  )
}

export default ItemCommentUI
