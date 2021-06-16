import {Router} from '@material-ui/icons'
import {useRouter} from 'next/router'
import {createContext, useContext, useEffect, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import MarketMainUI from './main.presenter'
import withAuth from '../../commons/hocs/withAuth'
import {useQuery} from '@apollo/client'
import {USED_ITEM_BEST, USED_ITEMS} from './main.queries'
//! 요거 필요!

// export const LayoutContext = createContext({
//   accessToken: '',
//   setAccessToken: (__) => {},
// })
//! 여기서 부르는게 아님!

const MarketMain = (props) => {
  const router = useRouter()
  // console.log(router)

  const [currentPage, SetCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [inputSearch, SetInputSearch] = useState('')

  const {data: bestItem} = useQuery(USED_ITEM_BEST)
  const {data: usedItems, fetchMore} = useQuery(USED_ITEMS, {
    variables: {page: Number(currentPage), search: search},
  })
  // console.log(usedItems?.fetchUseditems.page, '페이지')
  // console.log(usedItems?.fetchUseditems, 'didd')

  const onLoadMore = () => {
    console.log('1111')
    // console.log('ccc123', usedItems)
    // console.log('aaa123', usedItems?.fetchUseditems.length)
    // console.log('1234123', usedItems?.fetchUseditems.length % 10)
    if (usedItems?.fetchUseditems.length % 10 !== 0) return

    fetchMore({
      variables: {
        page: Math.floor(usedItems?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => ({
        fetchUseditems: [
          ...prev.fetchUseditems,
          ...fetchMoreResult.fetchUseditems,
        ],
      }),
    })
  }

  const onClickBestItem = (event) => {
    router.push(`marketboard/${event.target.id}`)
  }

  const onChangeSearch = (event) => {
    SetInputSearch(event.target.value)
  }

  const onClickSearch = () => {
    setSearch(inputSearch)
  }

  return (
    <MarketMainUI
      onLoadMore={onLoadMore}
      bestItem={bestItem}
      onClickBestItem={onClickBestItem}
      usedItems={usedItems}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  )
}

export default MarketMain
// export default withAuth(MarketMain)

// const router = useRouter()

// const {accessToken} = useContext(LayoutContext)

// console.log(accessToken)

// //!권한 체크. 회원만 볼 수 있는 페이지
// useEffect(() => {
//   if (!accessToken) {
//     router.push(`/board/login/`)
//   }
// }, [])

// if (!accessToken) return <></>
// //! 얘의 역할 정확하게 파악하기.
// //! 토큰이 없을 시 프레젠터의 화면이 먼저 보여지면 안되므로!!
