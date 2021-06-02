import Navigation from './navigation/LayoutNavigation.container'
import styled from '@emotion/styled'
import Header from './header/LayoutHeader.container'

export const Wrapper = styled.div`
  /* margin-top: ; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgray; */
  /* background-image: url('bg2/.png'); */
`

export const Body = styled.div`
  height: 100%;

  /* width: 100px; */
  /* background-color: lightgray; */
`

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Body>{children}</Body>
      {/* <Footer>푸터영역</Footer> */}
    </Wrapper>
  )
}

export default Layout
