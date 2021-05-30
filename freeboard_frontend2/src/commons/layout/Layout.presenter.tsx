import {Body, Footer, Header, Wrapper} from './Layout.styles'

const LayoutUI = ({children}) => {
  return (
    <Wrapper>
      <Header>헤더영역</Header>
      <Body>{children}</Body>
      <Footer>푸터영역</Footer>
    </Wrapper>
  )
}

export default LayoutUI
