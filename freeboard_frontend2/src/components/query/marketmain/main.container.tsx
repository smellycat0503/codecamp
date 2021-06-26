import {Router} from '@material-ui/icons'
import {useRouter} from 'next/router'
import {createContext, useContext, useEffect, useState} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import MarketMainUI from './main.presenter'
import withAuth from '../../commons/hocs/withAuth'
//! 요거 필요!
import {useQuery} from '@apollo/client'
import {USED_ITEM_BEST, USED_ITEMS} from './main.queries'

const MarketMain = (props) => {
  const router = useRouter()

  const [currentPage, SetCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [inputSearch, SetInputSearch] = useState('')

  const {data: bestItem} = useQuery(USED_ITEM_BEST)
  const {data: usedItems, fetchMore} = useQuery(USED_ITEMS, {
    variables: {page: Number(currentPage), search: search},
  })

  const onLoadMore = () => {
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

  const onClickItemRegist = (event) => {
    router.push(`/board/itemregist/`)
  }

  return (
    <MarketMainUI
      onLoadMore={onLoadMore}
      bestItem={bestItem}
      onClickBestItem={onClickBestItem}
      usedItems={usedItems}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      onClickItemRegist={onClickItemRegist}
    />
  )
}

// if (typeof window !== 'undefined') {
//   //! window 자체가 렌더링보다 늦기 대문에, window 로딩 시에만 실행하는 조건. 그렇지 않으면 페이지렌더링 시 에러 발생.

export default withAuth(MarketMain)
