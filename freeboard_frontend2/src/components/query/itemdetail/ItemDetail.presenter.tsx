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
  Edit__Button,
} from './ItemDetail.styles'

import Slider from 'react-slick'
import {baseURL} from './image'
import styled from '@emotion/styled'
import {getDate} from '../../../commons/libraries/utils'

const ItemDetailUI = ({
  data,
  onClickToMain,
  isOwner,
  onClickEditPage,
  onClickChargeButton,
}) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Item__Sub__Img src={`${baseURL}/${data?.fetchUseditem.images[i]}`} />
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
      margin-left: 50px;
      width: 40px; //배경
      height: 40px; //배경
    }

    .slick-prev {
      right: 3% !important;
      z-index: 1;
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
      color: gray; //! 화살표 색!!
    }
  `

  console.log(baseURL, 'baseURL')
  console.log(data?.fetchUseditem.images, 'data?.fetchUseditem.images')
  console.log(data?.fetchBoard?.images)

  return (
    <Wrapper>
      <Header__Wrapper>
        <User__Info__Wrapper>
          <User__Icon src="/user40.png"></User__Icon>
          <User__Id__CreateAt__Wraper>
            <User__Id>{data?.fetchUseditem.seller.name}</User__Id>
            <CreatedAt>{getDate(data?.fetchUseditem.createdAt)}</CreatedAt>
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

        <StyledSlider {...settings}>
          <div>
            <Item__Main__Img
              src={`${baseURL}/${data?.fetchUseditem.images[0]}`}
            />
          </div>
          <div>
            <Item__Main__Img
              src={`${baseURL}/${data?.fetchUseditem.images[1]}`}
            />
          </div>
          <div>
            <Item__Main__Img
              src={`${baseURL}/${data?.fetchUseditem.images[2]}`}
            />
          </div>
          <div>
            <Item__Main__Img
              src={`${baseURL}/${data?.fetchUseditem.images[3]}`}
            />
          </div>
        </StyledSlider>

        <Item__Detail__Contents
          dangerouslySetInnerHTML={{__html: data?.fetchUseditem.contents}}
        ></Item__Detail__Contents>
        <Item__Tag>{data && data?.fetchUseditem.tags}</Item__Tag>
        <Map__Wrapper>
          <Map src="/map.png"></Map>
        </Map__Wrapper>
      </Item__Detail__Body__Wrapper>
      <Menu__Button__Wrapper>
        <ToList__Button onClick={onClickToMain}>목록으로</ToList__Button>
        {!isOwner ? (
          <Buy__Button onClick={onClickChargeButton}>구매하기</Buy__Button>
        ) : (
          <Edit__Button onClick={onClickEditPage}>수정하기</Edit__Button>
        )}
      </Menu__Button__Wrapper>
    </Wrapper>
  )
}

export default ItemDetailUI
