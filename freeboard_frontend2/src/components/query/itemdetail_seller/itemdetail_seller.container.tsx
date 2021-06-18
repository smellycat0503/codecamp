import ItemDetailUI from './itemdetail_seller.presenter'
import ItemComment from './../itemcomment/ItemComment.container'
import {FETCH_USED_ITEM} from './ItemDetail_seller.queries'
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

const ItemDetail = () => {
  const router = useRouter()

  console.log(router)

  const {data} = useQuery(FETCH_USED_ITEM, {
    variables: {useditemId: router.query.ID},
  })
  //! 여기 쿼리할 때 베리어블스 들어가야함.

  const onClickToMain = () => {
    router.push(`/board/marketmain/`)
  }

  return (
    <>
      <ItemDetailUI data={data} onClickToMain={onClickToMain} />
      <ItemComment />
    </>
  )
}

export default ItemDetail
