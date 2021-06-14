import {
  Wrapper,
  Header__Wrapper,
  User__Info__Wrapper,
  User__Icon,
  User__Id__CreateAt__Wraper,
  User__Id,
  CreatedAt,
  Attach__And__Address__Wrapper,
  Attach__Icon,
  Map__Icon,
  Item__Detail__Body__Wrapper,
  Item__Detail__Body__Top__Wrapper,
  Item__Name__Price__Wrapper,
  ModelName,
  Item__Title,
  Price,
  Like__Wrapper,
  Like__Button,
  Like__Number,
  Item__Carousel__Wrapper,
  Item__Main__Img,
  Item__Sub__Img__Wrapper,
  Item__Sub__Img,
  Item__Detail__Contents,
  Item__Tag,
  Map__Wrapper,
  Map,
  Menu__Button__Wrapper,
  ToList__Button,
  Buy__Button,
} from './ItemDetail.styles'

// import ItemComment from '../itemcomment/ItemComment.container'

const ItemDetailUI = () => {
  return (
    <Wrapper>
      <Header__Wrapper>
        <User__Info__Wrapper>
          <User__Icon src="/user40.png"></User__Icon>
          <User__Id__CreateAt__Wraper>
            <User__Id>판매자</User__Id>
            <CreatedAt>Date : 2021.02.18</CreatedAt>
          </User__Id__CreateAt__Wraper>
        </User__Info__Wrapper>
        <Attach__And__Address__Wrapper>
          <Attach__Icon src="/attach.png"></Attach__Icon>
          <Map__Icon src="/loca.png"></Map__Icon>
        </Attach__And__Address__Wrapper>
      </Header__Wrapper>
      <Item__Detail__Body__Wrapper>
        <Item__Detail__Body__Top__Wrapper>
          <Item__Name__Price__Wrapper>
            <ModelName>2019 LTE 32GB</ModelName>
            <Item__Title>삼성전자 갤럽시탭A 10.1</Item__Title>
            <Price>210,120원</Price>
          </Item__Name__Price__Wrapper>
          <Like__Wrapper>
            <Like__Button src="/ic_favorite-36px.png"></Like__Button>
            <Like__Number>20</Like__Number>
          </Like__Wrapper>
        </Item__Detail__Body__Top__Wrapper>
        <Item__Carousel__Wrapper>
          <Item__Main__Img src="/갤럭시 탭A image main.png"></Item__Main__Img>
          <Item__Sub__Img__Wrapper>
            <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
            <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
            <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
            <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
          </Item__Sub__Img__Wrapper>
        </Item__Carousel__Wrapper>
        <Item__Detail__Contents>
          액정에 잔기스랑 주변부 스크래치있습니다. 택배거래 안합니다.액정에
          잔기스랑 주변부 스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑
          주변부 스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑 주변부
          스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑 주변부
          스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑 주변부
          스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑 주변부
          스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑 주변부
          스크래치있습니다. 택배거래 안합니다.액정에 잔기스랑 주변부
          스크래치있습니다. 택배거래 안합니다. 갤럭시탭A T515 10.1인치
          새제품급입니다 잔상번인그런거 없어요 기능이런문제 전혀 없어요
          3사호환가능하며 사용하시던 유시만 너으시면 되세요 택배가능 착불
          가격네고 안되세요 경기도산본에서 거래가능합니다
        </Item__Detail__Contents>
        <Item__Tag>#삼성전자 #갤러시탭</Item__Tag>
        <Map__Wrapper>
          <Map src="/map.png"></Map>
        </Map__Wrapper>
      </Item__Detail__Body__Wrapper>
      <Menu__Button__Wrapper>
        <ToList__Button>목록으로</ToList__Button>
        <Buy__Button>구매하기</Buy__Button>
      </Menu__Button__Wrapper>
    </Wrapper>
  )
}

export default ItemDetailUI
