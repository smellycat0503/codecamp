import ItemDetailUI from './ItemDetail.presenter'
import ItemComment from '../itemcomment/itemCommentReply/ItemCommentReply.container'
import {FETCH_USED_ITEM} from './ItemDetail.queries'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import withAuth from '../../commons/hocs/withAuth'
import {useContext} from 'react'
import {LayoutContext} from '../../../../pages/_app'

const ItemDetail = (props) => {
  const {userInfo} = useContext(LayoutContext)
  const router = useRouter()

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: router.query.ID},
  })
  //! 여기 쿼리할 때 베리어블스 들어가야함.

  const onClickToMain = () => {
    router.push(`/board/marketmain/`)
  }

  const isOwner = data?.fetchUseditem.seller._id === userInfo._id

  const onClickEditPage = () => {
    router.push(`/board/${data?.fetchUseditem._id}/edit_item/`)
  }

  return (
    <>
      <ItemDetailUI
        data={data}
        onClickToMain={onClickToMain}
        isOwner={isOwner}
        onClickEditPage={onClickEditPage}
      />
      <ItemComment />
    </>
  )
}

export default withAuth(ItemDetail)
