import Navigation from './navigation/LayoutNavigation.container'
import styled from '@emotion/styled'
import Header from './header/LayoutHeader.container'
import Navigation2 from './Navigation2/Navigation2.container'

export const Wrapper = styled.div`
  /* margin-top: ; */
  width: 100%;
  /* height: 100%; */
  display: flex;
  z-index: 99;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgray; */
`

export const Body = styled.div`
  height: 100%;

  /* width: 100px; */
  /* background-color: lightgray; */
`
// export const Welcome = styled.div`
//   position: absolute;
/* z-index: -1; */
/* opacity: 0.4; */
/* font-size: 100px;
  padding-top: 200px;
  margin-left: 1100px;
  width: 30%;
  height: 900px;
  align-self: flex-start;
  color: black; */
/* background-color: yellow; */
/* width: 100%; */
/* height: 100%; */
// `

// // export const Join = styled.button`
/* font-size: 70px; */
/* height: 50px;
  width: 90px; */
/* z-index: 98; */
/* padding-top: px; */

/* height: 100%; */
/* z-index: 100; */
// `

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
