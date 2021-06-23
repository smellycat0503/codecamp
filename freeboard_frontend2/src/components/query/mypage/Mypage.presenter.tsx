import {
  Wrapper,
  Mypage__Menu__Wrapper,
  Mypage__MyInfo__Wrapper,
  Mypage__Title,
  Icon__Name__Wrapper,
  Mypage__Icon,
  Mypage__UserName,
  Mypage__UserCash__Wrapper,
  Mypage__UserCash__Img,
  Mypage__UserCash,
  Mypage__MyMenu__Wrapper,
  MyBoard__Wrapper,
  MyBoard__Img,
  MyBoard__Menu,
  My__MarketPlace__Wrapper,
  My__MarketPlace__Img,
  My__MarketPlace__Menu,
  MyPoint__Wrapper,
  MyPoint__Img,
  MyPoint__Menu,
  MyProfile__Wrapper,
  MyProfile__Img,
  Mypage__Boardlist__Wrapper,
  MyProfile,
  BoardList__Top__Wrapper,
  Select__Delete__Button,
  BoardList__Body__Wrapper,
  BoardList__TopList__Wrapper,
  Top__Number,
  Top__CheckBox,
  Top__Title,
  //   Top__Content,
  Top__WriterName,
  Top__Date,
  BoardList__Wrapper,
  CheckBox,
  Number,
  Title,
  WriterName,
  Date,
  PageList__Wrapper,
  Prev__Button,
  Page,
  Next__Button,
} from './Mypage.styles'
import MyMarket from './Mypage.presenter.item'

const MypageUI = () => {
  return (
    <>
      <Wrapper>
        <Mypage__Menu__Wrapper>
          <Mypage__MyInfo__Wrapper>
            <Mypage__Title>MYPAGE</Mypage__Title>
            <Icon__Name__Wrapper>
              <Mypage__Icon src="/mypageicon.png"></Mypage__Icon>

              <Mypage__UserName>노원두</Mypage__UserName>
            </Icon__Name__Wrapper>

            <Mypage__UserCash__Wrapper>
              <Mypage__UserCash__Img src="/ic_savings-24px 1.png"></Mypage__UserCash__Img>
              <Mypage__UserCash>100,000</Mypage__UserCash>
            </Mypage__UserCash__Wrapper>
          </Mypage__MyInfo__Wrapper>
          <Mypage__MyMenu__Wrapper>
            <MyBoard__Wrapper>
              <MyBoard__Img src="/ic_description-24px.png"></MyBoard__Img>
              <MyBoard__Menu>내 게시물</MyBoard__Menu>
            </MyBoard__Wrapper>
            <My__MarketPlace__Wrapper>
              <My__MarketPlace__Img src="/ic_shopping_cart-24px.png"></My__MarketPlace__Img>
              <My__MarketPlace__Menu>내 장터</My__MarketPlace__Menu>
            </My__MarketPlace__Wrapper>
            <MyPoint__Wrapper>
              <MyPoint__Img src="/ic_savings-24px 1 (1).png"></MyPoint__Img>
              <MyPoint__Menu>내 포인트</MyPoint__Menu>
            </MyPoint__Wrapper>
            <MyProfile__Wrapper>
              <MyProfile__Img src="/ic_profile-24px.png"></MyProfile__Img>
              <MyProfile>내 프로필</MyProfile>
            </MyProfile__Wrapper>
          </Mypage__MyMenu__Wrapper>
        </Mypage__Menu__Wrapper>
        <MyMarket />
      </Wrapper>
    </>
  )
}

export default MypageUI
