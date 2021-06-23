import ItemDetailUI from './ItemDetail.presenter'
import ItemComment from './../itemcomment/ItemComment.container'
import {FETCH_USED_ITEM} from './ItemDetail.queries'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import withAuth from '../../commons/hocs/withAuth'
import {useContext} from 'react'
import {LayoutContext} from '../../../../pages/_app'

const ItemDetail = (props) => {
  const {userInfo} = useContext(LayoutContext)
  const router = useRouter()

  // console.log(router)

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: router.query.ID},
  })
  //! 여기 쿼리할 때 베리어블스 들어가야함.

  const onClickToMain = () => {
    router.push(`/board/marketmain/`)
  }

  console.log(data?.fetchUseditem.seller._id, '게시물 기준 작성자 아이디')
  console.log(userInfo._id, '유저정보')

  const isOwner = data?.fetchUseditem.seller._id === userInfo._id

  console.log(data?.fetchUseditem._id, '게시글아이디')

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
