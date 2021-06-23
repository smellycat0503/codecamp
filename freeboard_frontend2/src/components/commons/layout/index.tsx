import Navigation from './navigation/LayoutNavigation.container'
import styled from '@emotion/styled'
import Header from './header/LayoutHeader.container'
import Navigation2 from './Navigation2/Navigation2.container'

export const Wrapper = styled.div``

export const Body = styled.div``

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Navigation2></Navigation2>
      {/* <Welcome>폰트폰트폰트폰트폰트폰트폰트폰트폰트</Welcome> */}
      {/* <Join>회원가입</Join> */}
      <Header />
      <Navigation />
      <Body>{children}</Body>
      {/* <Footer>푸터영역</Footer> */}
    </Wrapper>
  )
}

export default Layout
