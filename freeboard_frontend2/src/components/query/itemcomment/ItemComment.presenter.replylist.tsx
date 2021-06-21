import {Reply__List__Wrapper} from './ItemComment.styled'
import InfiniteScroll from 'react-infinite-scroller'
import {LayoutContext} from '../../../../pages/_app'
import {useContext, useState} from 'react'
import {FETCH_USED_ITEM_QUESTION} from './ItemComment.queries'

import ReplylistItem from './ItemComment.presenter.replylist.item'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

//*댓글 목록/ 맵, 인피니트스크롤 적용 페이지
const Reply__List = () => {
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)

  //*댓글 쿼리, 인피니트스크롤 페이모어 사용
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

  //*인피니트스크롤 함수/ 쿼리모어 및 업데이트쿼리 합치기
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
    <Reply__List__Wrapper>
      {readReply?.fetchUseditemQuestions && (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {readReply?.fetchUseditemQuestions.map((data) => (
            <ReplylistItem data={data} />
          ))}
        </InfiniteScroll>
      )}
    </Reply__List__Wrapper>
  )
}

export default Reply__List
