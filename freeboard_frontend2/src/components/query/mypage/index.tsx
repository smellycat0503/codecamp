import styled from '@emotion/styled'
import MypageMenu from './mypageMenu/mypageMenu.container'
import MypageBoard from './myMarketBoard/mypageBoard.container'

const MypageIndex = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
  `

  return (
    <Wrapper>
      <MypageMenu />
      <MypageBoard />
    </Wrapper>
  )
}

export default MypageIndex
