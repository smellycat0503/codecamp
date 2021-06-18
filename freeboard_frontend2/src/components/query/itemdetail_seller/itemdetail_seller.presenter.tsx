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
} from './itemdetail_seller.styles'

import React, {Component} from 'react'
import Slider from 'react-slick'
import {baseURL} from './image'
import styled from '@emotion/styled'
// import {baseUrl} from '../../../../public'
// import ItemComment from '../itemcomment/ItemComment.container'

const ItemDetailUI = ({data, onClickToMain}) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          {/* <Item__Sub__Img__Wrapper> */}
          <Item__Sub__Img src={`${baseURL}/a-0${i + 1}.png`} />
          {/* </Item__Sub__Img__Wrapper> */}
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const StyledSlider = styled(Slider)`
    .slick-next {
      right: 3% !important;
      z-index: 1; //! 얘는 배경이 없을 땐 없어도 될 듯.
      /* color: black; */ // 의미없음
      /* background: black; */
      margin-left: 50px;
      width: 40px; //배경
      height: 40px; //배경
    }

    .slick-prev {
      right: 3% !important;
      z-index: 1;
      /* color: black; */ // 의미없음
      /* background: black; */
      margin-left: 50px;
      width: 40px; //배경
      height: 40px; //배경
    }

    .slick-prev:before,
    .slick-next:before {
      font-family: 'slick';
      font-size: 40px;
      line-height: 0;

      opacity: 0.75;
      color: gray; //!이놈이 화살표 색!!
    }
  `

  return (
    <Wrapper>
      <Header__Wrapper>
        <User__Info__Wrapper>
          <User__Icon src="/user40.png"></User__Icon>
          <User__Id__CreateAt__Wraper>
            <User__Id>{data?.fetchUseditem.seller.name}</User__Id>
            <CreatedAt>{data && data?.fetchUseditem.createdAt}</CreatedAt>
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
            <ModelName>{data && data?.fetchUseditem.remarks}</ModelName>
            <Item__Title>{data && data?.fetchUseditem.name}</Item__Title>
            <Price>{data && data?.fetchUseditem.price}원</Price>
          </Item__Name__Price__Wrapper>
          <Like__Wrapper>
            <Like__Button src="/ic_favorite-36px.png"></Like__Button>
            <Like__Number>20</Like__Number>
          </Like__Wrapper>
        </Item__Detail__Body__Top__Wrapper>
        {/* <Item__Carousel__Wrapper> */}

        <StyledSlider {...settings}>
          <div>
            <Item__Main__Img src={`${baseURL}/a-01.png`} />
          </div>
          <div>
            <Item__Main__Img src={`${baseURL}/a-02.png`} />
          </div>
          <div>
            <Item__Main__Img src={`${baseURL}/a-03.png`} />
          </div>
          <div>
            <Item__Main__Img src={`${baseURL}/a-04.png`} />
          </div>
        </StyledSlider>
        {/* </Item__Sub__Img__Wrapper> */}
        {/* <Item__Main__Img src="/갤럭시 탭A image main.png"></Item__Main__Img>
            <Item__Sub__Img__Wrapper>
              <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
              <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
              <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
              <Item__Sub__Img src="/갤럭시 탭A image 1.png"></Item__Sub__Img>
            </Item__Sub__Img__Wrapper> */}
        {/* </Item__Carousel__Wrapper> */}
        <Item__Detail__Contents>
          {data && data?.fetchUseditem.contents}
        </Item__Detail__Contents>
        <Item__Tag>{data && data?.fetchUseditem.tags}</Item__Tag>
        <Map__Wrapper>
          <Map src="/map.png"></Map>
        </Map__Wrapper>
      </Item__Detail__Body__Wrapper>
      <Menu__Button__Wrapper>
        <ToList__Button onClick={onClickToMain}>목록으로</ToList__Button>
        <Buy__Button>구매하기</Buy__Button>
      </Menu__Button__Wrapper>
    </Wrapper>
  )
}

export default ItemDetailUI
