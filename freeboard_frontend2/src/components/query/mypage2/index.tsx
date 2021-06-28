import Mypage2Menu from './menu/Mypage2Menu.container'
// import Mypage2Board from './board/Mypage2Board.container'
import {useState} from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Mypage2 = () => {
  return (
    <Wrapper>
      <Mypage2Menu />
      {/* <Mypage2Board /> */}
    </Wrapper>
  )
}

export default Mypage2
