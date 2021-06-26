import {
  Wrapper,
  Best__Items__Wrapper,
  Title,
  Best__List__Wrapper,
  Best__Item__Wrapper,
  Item__Img,
  Item__Detail__Wrapper,
  Item__Title,
  Item__ModelName,
  Item__Price,
  ModelName__Price__Wrapper,
  Like__Wrapper,
  Like__Button,
  Like__Number,
  Sale__Wrapper,
  Sale__Menu__Search__Wrapper,
  Menu__Wrapper,
  Now__Sale__Item,
  SoldOut__Item,
  Search__Wrapper,
  Search__Input,
  Date__Wrapper,
  Calender__Img,
  Search__Button,
  Date__Start,
  Date__End,
  Tilde,
  Now__Sale__List__Wrapper,
  Item__Wrapper,
  Sale__Item__Img,
  Sale__Item__Detail,
  Sale__Item__Price,
  Sale__Item__Title__Detail__Wrapper,
  Sale__Item__Title,
  Sale__Item__ModelName,
  Sale__Item__Tag,
  Sale__UserName__Like__Wrapper,
  Sale__User__Icon,
  Sale__UserName,
  Sale__Item__Like__Button,
  Sale__Item__Like__Number,
  Sale__Img__Detail__Wrapper,
  Sale__Item__Price__Wrapper,
  Sale__Item__Price__Img,
  Regist__Item__Wrapper,
  Regist__Button,
  Sale__List__Today__HaveSeen__Wrapper,
  HaveSeen__Wrapper,
  TodayIHaveSeen__Title,
  HaveSeen__Item__Wrapper,
  HaveSeen__Item__Like__Wrapper,
  HaveSeen__Item__Like__Button,
  HaveSeen__Item__Like__Number,
  HaveSeen__Item__Image,
  HaveSeen__Item__Detail__Wrapper,
  HaveSeen__Item__Detail__Title,
  HaveSeen__Item__Detail__ModelName,
  HaveSeen__Item__Detail__Price,
  HaveSeen__Item__Detail__Tag,
  HaveSeen__Item__Image__Wrapper,
} from './main.styled'
import InfiniteScroll from 'react-infinite-scroller'

const MarketMainUI = ({
  bestItem,
  onClickBestItem,
  onLoadMore,
  usedItems,
  onChangeSearch,
  onClickSearch,
  onClickItemRegist,
}) => {
  return (
    <Wrapper>
      <Best__Items__Wrapper>
        <Title>베스트 상품</Title>
        <Best__List__Wrapper>
          {bestItem?.fetchUseditemsOfTheBest.map((best) => (
            <Best__Item__Wrapper>
              <Item__Img
                src="/Best_Items/a.png"
                onClick={onClickBestItem}
                id={best._id}
              ></Item__Img>
              <Item__Title onClick={onClickBestItem} id={best._id}>
                {best.name}
              </Item__Title>
              <Item__Detail__Wrapper>
                <ModelName__Price__Wrapper>
                  <Item__ModelName>{best.remarks}</Item__ModelName>
                  <Item__Price>{best.price}원</Item__Price>
                </ModelName__Price__Wrapper>
                <Like__Wrapper>
                  <Like__Button src="/likeimg.png"></Like__Button>
                  <Like__Number>20</Like__Number>
                </Like__Wrapper>
              </Item__Detail__Wrapper>
            </Best__Item__Wrapper>
          ))}
        </Best__List__Wrapper>
      </Best__Items__Wrapper>

      <Sale__Wrapper>
        <Sale__Menu__Search__Wrapper>
          <Menu__Wrapper>
            <Now__Sale__Item>판매중상품</Now__Sale__Item>
            <SoldOut__Item>판매된상품</SoldOut__Item>
          </Menu__Wrapper>
          <Search__Wrapper>
            <Search__Input
              placeholder="제품을 검색해주세요."
              name="search"
              onChange={onChangeSearch}
            ></Search__Input>
            <Date__Wrapper>
              <Calender__Img src="/cal.png"></Calender__Img>
              <Date__Start>2020.12.02</Date__Start>
              <Tilde> ~ </Tilde>
              <Calender__Img src="/cal.png"></Calender__Img>
              <Date__End>2020.12.02</Date__End>
            </Date__Wrapper>

            <Search__Button onClick={onClickSearch}>검색</Search__Button>
          </Search__Wrapper>
        </Sale__Menu__Search__Wrapper>
        <Sale__List__Today__HaveSeen__Wrapper>
          <Now__Sale__List__Wrapper>
            {usedItems?.fetchUseditems.length && (
              <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={true}
                useWindow={false}
              >
                {usedItems?.fetchUseditems.map((data) => (
                  <Item__Wrapper>
                    <Sale__Img__Detail__Wrapper>
                      <Sale__Item__Img
                        src="/160a.png"
                        onClick={onClickBestItem}
                        id={data._id}
                      ></Sale__Item__Img>
                      <Sale__Item__Detail>
                        <Sale__Item__Title__Detail__Wrapper>
                          <Sale__Item__Title
                            onClick={onClickBestItem}
                            id={data._id}
                          >
                            {data.name}
                          </Sale__Item__Title>
                          <Sale__Item__ModelName>
                            {data.remarks}
                          </Sale__Item__ModelName>
                          <Sale__Item__Tag>{data.tags}</Sale__Item__Tag>
                        </Sale__Item__Title__Detail__Wrapper>
                        <Sale__UserName__Like__Wrapper>
                          <Sale__User__Icon src="/saleUserIcon.png"></Sale__User__Icon>
                          <Sale__UserName>{data.seller.name}</Sale__UserName>
                          <Sale__Item__Like__Button src="/likeimg.png"></Sale__Item__Like__Button>
                          <Sale__Item__Like__Number>
                            20
                          </Sale__Item__Like__Number>
                        </Sale__UserName__Like__Wrapper>
                      </Sale__Item__Detail>
                    </Sale__Img__Detail__Wrapper>
                    <Sale__Item__Price__Wrapper>
                      <Sale__Item__Price__Img src="/w.png"></Sale__Item__Price__Img>
                      <Sale__Item__Price>{data.price}원</Sale__Item__Price>
                    </Sale__Item__Price__Wrapper>
                  </Item__Wrapper>
                ))}
              </InfiniteScroll>
            )}
          </Now__Sale__List__Wrapper>
          <HaveSeen__Wrapper>
            <TodayIHaveSeen__Title>오늘 본 상품</TodayIHaveSeen__Title>
            <HaveSeen__Item__Wrapper>
              <HaveSeen__Item__Like__Wrapper>
                <HaveSeen__Item__Like__Button src="/ic_favorite-24px.png"></HaveSeen__Item__Like__Button>
                <HaveSeen__Item__Like__Number>20</HaveSeen__Item__Like__Number>
              </HaveSeen__Item__Like__Wrapper>
              <HaveSeen__Item__Image__Wrapper>
                <HaveSeen__Item__Image src="/갤럭시 탭A image 1 (1).png"></HaveSeen__Item__Image>
              </HaveSeen__Item__Image__Wrapper>
              <HaveSeen__Item__Detail__Wrapper>
                <HaveSeen__Item__Detail__Title>
                  삼성전자 갤럭시탭A
                </HaveSeen__Item__Detail__Title>
                <HaveSeen__Item__Detail__ModelName>
                  2019
                </HaveSeen__Item__Detail__ModelName>
                <HaveSeen__Item__Detail__Price>
                  240,120원
                </HaveSeen__Item__Detail__Price>
                <HaveSeen__Item__Detail__Tag>
                  #삼성전자
                </HaveSeen__Item__Detail__Tag>
              </HaveSeen__Item__Detail__Wrapper>
            </HaveSeen__Item__Wrapper>
          </HaveSeen__Wrapper>
        </Sale__List__Today__HaveSeen__Wrapper>
        <Regist__Item__Wrapper>
          <Regist__Button onClick={onClickItemRegist}>
            상품 등록하기
          </Regist__Button>
        </Regist__Item__Wrapper>
      </Sale__Wrapper>
    </Wrapper>
  )
}

export default MarketMainUI
