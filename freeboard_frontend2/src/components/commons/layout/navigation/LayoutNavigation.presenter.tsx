import {useRouter} from 'next/router'
import {
  Navi,
  Vertical,
  FreeMarket,
  MyPage,
  FreeBoard,
} from './LayoutNavigation.styles'

const NaviUI = () => {
  const router = useRouter()

  const onClickMarket = () => {
    router.push(`/board/marketmain`)
  }

  return (
    <Navi>
      <FreeBoard>자유게시판</FreeBoard>
      <Vertical>|</Vertical>
      <FreeMarket onClick={onClickMarket}>중고마켓</FreeMarket>
      <Vertical>|</Vertical>
      <MyPage>마이페이지</MyPage>
    </Navi>
  )
}

export default NaviUI
