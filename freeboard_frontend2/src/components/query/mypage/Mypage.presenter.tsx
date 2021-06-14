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
        <Mypage__Boardlist__Wrapper>
          <BoardList__Top__Wrapper>
            <Select__Delete__Button>선택 삭제</Select__Delete__Button>
          </BoardList__Top__Wrapper>
          <BoardList__Body__Wrapper>
            <BoardList__TopList__Wrapper>
              <Top__CheckBox type="checkbox"></Top__CheckBox>
              <Top__Number>번호</Top__Number>
              <Top__Title>제목</Top__Title>
              <Top__WriterName>작성자</Top__WriterName>
              <Top__Date>날짜</Top__Date>
            </BoardList__TopList__Wrapper>
            {new Array(10).fill(1).map((__, index) => (
              <BoardList__Wrapper>
                <CheckBox type="checkbox"></CheckBox>
                <Number>10</Number>
                <Title>게시물 제목입니다.</Title>
                <WriterName>노원두</WriterName>
                <Date>2020.09.28</Date>
              </BoardList__Wrapper>
            ))}
          </BoardList__Body__Wrapper>
          <PageList__Wrapper>
            <Prev__Button src="/ic_navigate_before-24px.png"></Prev__Button>
            {new Array(10).fill(1).map((__, index) => (
              <Page id={String(index + 1)}>{index + 1}</Page>
            ))}
            <Next__Button src="/ic_navigate_next-24px.png"></Next__Button>
          </PageList__Wrapper>
        </Mypage__Boardlist__Wrapper>
      </Wrapper>
    </>
  )
}

export default MypageUI
