import {
  Wrapper,
  ItemRegist__Wrapper,
  ItemRegist__Title,
  Body__Wrapper,
  Item__Title__Wrapper,
  Item__Name__Title,
  Item__Name__Input,
  Summary__Wrapper,
  Summary__Title,
  Summary__Input,
  Item__Detail__Wrapper,
  Item__Detail__Title,
  Item__Detail__Input,
  Sale__Price__Wrapper,
  Sale__Price__Title,
  Sale__Price__Input,
  Tag__Wrapper,
  Tag__Title,
  Tag__Input,
  Location__Wrapper,
  Location__Map__Wrapper,
  Location__Title,
  Location__Map,
  GPS__Address__Wrapper,
  GPS__Wrapper,
  GPS__Title,
  GPS__Button__Wrapper,
  LAT__Button,
  Map__Button,
  LNG__Button,
  Address__Wrapper,
  Address__Title,
  Address_Input1,
  Address_Input2,
  IMG__Attach_Wrapper,
  IMG__Attach__Title,
  IMG__Wrapper,
  IMG__Upload__Preview__Wrapper,
  IMG__Upload__Button,
  Main__IMG__Setting__Wrapper,
  Main__IMG__Title,
  Main__IMG__Radio__Wrapper,
  IMG__Radio,
  Regist__Button__Wrapper,
  Regist__Button,
  IMG__Upload__Cancel__Button,
  IMG__Upload__Preview,
  Radio1,
  Radio2,
} from './ItemRegist.styles'

import Head from 'next/head'

// import ReactQuill from 'react-quill'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import {useEffect} from 'react'

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

const ItemRegistUI = ({onChangeInputInfo, onClickItemInfo, onChangeEditor}) => {
  useEffect(() => {
    const aaa = setInterval(() => {
      if (!window.kakao) return
      // @ts-ignore
      kakao.maps.load(function () {
        const container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          //@ts-ignore
          center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        }
        //@ts-ignore
        new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
        clearInterval(aaa)
      })
    }, 100)
  }, [])

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3b0e3a19115e974ac9105c44cf4831b0"
        ></script>
      </Head>
      <Wrapper>
        <ItemRegist__Wrapper>
          <ItemRegist__Title>상품 등록하기</ItemRegist__Title>
          <Body__Wrapper>
            <Item__Title__Wrapper>
              <Item__Name__Title>상품명</Item__Name__Title>
              <Item__Name__Input
                name="name"
                placeholder="상품명을 작성해주세요."
                onChange={onChangeInputInfo}
              ></Item__Name__Input>
            </Item__Title__Wrapper>
            <Summary__Wrapper>
              <Summary__Title>한줄요약</Summary__Title>
              <Summary__Input
                name="remarks"
                placeholder="상품명을 작성해주세요."
                onChange={onChangeInputInfo}
              ></Summary__Input>
            </Summary__Wrapper>
            <Item__Detail__Wrapper>
              <Item__Detail__Title>상품설명</Item__Detail__Title>
              {/* <Item__Detail__Input
                name="contents"
                placeholder="상품을 설명해주세요."
                onChange={onChangeInputInfo}
              ></Item__Detail__Input> */}
              <ReactQuill
                name="contents"
                placeholder="상품을 설명해주세요."
                onChange={onChangeEditor}
              />
            </Item__Detail__Wrapper>
            <Sale__Price__Wrapper>
              <Sale__Price__Title>판매 가격</Sale__Price__Title>
              <Sale__Price__Input
                name="price"
                placeholder="판매 가격을 입력해주세요."
                onChange={onChangeInputInfo}
              ></Sale__Price__Input>
            </Sale__Price__Wrapper>
            <Tag__Wrapper>
              <Tag__Title>태그입력</Tag__Title>
              <Tag__Input
                name="tags"
                placeholder="#태그# 태그 #태그"
                onChange={onChangeInputInfo}
              ></Tag__Input>
            </Tag__Wrapper>
            <Location__Wrapper>
              <Location__Map__Wrapper>
                <Location__Title>거래위치</Location__Title>
                <div id="map" style={{width: '500px', height: '400px'}}></div>
                <Location__Map src="/map image.png"></Location__Map>
              </Location__Map__Wrapper>
              <GPS__Address__Wrapper>
                <GPS__Wrapper>
                  <GPS__Title>GPS</GPS__Title>
                  <GPS__Button__Wrapper>
                    <LAT__Button>위도(LAT)</LAT__Button>
                    <Map__Button src="/loca.png"></Map__Button>
                    <LNG__Button>경도(LNG)</LNG__Button>
                  </GPS__Button__Wrapper>
                </GPS__Wrapper>
                <Address__Wrapper>
                  <Address__Title>주소</Address__Title>
                  <Address_Input1></Address_Input1>
                  <Address_Input2></Address_Input2>
                </Address__Wrapper>
              </GPS__Address__Wrapper>
            </Location__Wrapper>
          </Body__Wrapper>
          <IMG__Attach_Wrapper>
            <IMG__Attach__Title>사진 첨부</IMG__Attach__Title>
            <IMG__Wrapper>
              <IMG__Upload__Preview__Wrapper>
                <IMG__Upload__Cancel__Button src="/img_del.png"></IMG__Upload__Cancel__Button>
                <IMG__Upload__Preview src="/갤럭시 탭A140.png"></IMG__Upload__Preview>
              </IMG__Upload__Preview__Wrapper>
              <IMG__Upload__Button src="/uploadimg.png"></IMG__Upload__Button>
            </IMG__Wrapper>
          </IMG__Attach_Wrapper>
          <Main__IMG__Setting__Wrapper>
            <Main__IMG__Title>메인 사진 설정</Main__IMG__Title>
            <Main__IMG__Radio__Wrapper>
              <IMG__Radio type="radio" name="option" value="사진1"></IMG__Radio>
              <Radio1 htmlFor="사진1">사진 1</Radio1>
              <IMG__Radio type="radio" name="option" value="사진2"></IMG__Radio>
              <Radio2 htmlFor="사진2">사진 2</Radio2>
            </Main__IMG__Radio__Wrapper>
          </Main__IMG__Setting__Wrapper>
          <Regist__Button__Wrapper>
            <Regist__Button onClick={onClickItemInfo}>등록하기</Regist__Button>
          </Regist__Button__Wrapper>
        </ItemRegist__Wrapper>
      </Wrapper>
    </>
  )
}

export default ItemRegistUI
