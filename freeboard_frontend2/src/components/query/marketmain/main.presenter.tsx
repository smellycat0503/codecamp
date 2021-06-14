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
} from './main.styled'

const MarketMainUI = () => {
  return (
    <Wrapper>
      <Best__Items__Wrapper>
        <Title>베스트 상품</Title>
        <Best__List__Wrapper>
          <Best__Item__Wrapper>
            <Item__Img src="/Best_Items/a.png"></Item__Img>
            <Item__Title>삼성전자 갤럭시탭A 10.1</Item__Title>
            <Item__Detail__Wrapper>
              <ModelName__Price__Wrapper>
                <Item__ModelName>2019 LTE 32GB</Item__ModelName>
                <Item__Price>240,120원</Item__Price>
              </ModelName__Price__Wrapper>
              <Like__Wrapper>
                <Like__Button src="/likeimg.png"></Like__Button>
                <Like__Number>20</Like__Number>
              </Like__Wrapper>
            </Item__Detail__Wrapper>
          </Best__Item__Wrapper>
          <Best__Item__Wrapper>
            <Item__Img src="/Best_Items/a.png"></Item__Img>
            <Item__Title>삼성전자 갤럭시탭A 10.1</Item__Title>
            <Item__Detail__Wrapper>
              <ModelName__Price__Wrapper>
                <Item__ModelName>2019 LTE 32GB</Item__ModelName>
                <Item__Price>240,120원</Item__Price>
              </ModelName__Price__Wrapper>
              <Like__Wrapper>
                <Like__Button src="/likeimg.png"></Like__Button>
                <Like__Number>20</Like__Number>
              </Like__Wrapper>
            </Item__Detail__Wrapper>
          </Best__Item__Wrapper>
          <Best__Item__Wrapper>
            <Item__Img src="/Best_Items/a.png"></Item__Img>
            <Item__Title>삼성전자 갤럭시탭A 10.1</Item__Title>
            <Item__Detail__Wrapper>
              <ModelName__Price__Wrapper>
                <Item__ModelName>2019 LTE 32GB</Item__ModelName>
                <Item__Price>240,120원</Item__Price>
              </ModelName__Price__Wrapper>
              <Like__Wrapper>
                <Like__Button src="/likeimg.png"></Like__Button>
                <Like__Number>20</Like__Number>
              </Like__Wrapper>
            </Item__Detail__Wrapper>
          </Best__Item__Wrapper>
          <Best__Item__Wrapper>
            <Item__Img src="/Best_Items/a.png"></Item__Img>
            <Item__Title>삼성전자 갤럭시탭A 10.1</Item__Title>
            <Item__Detail__Wrapper>
              <ModelName__Price__Wrapper>
                <Item__ModelName>2019 LTE 32GB</Item__ModelName>
                <Item__Price>240,120원</Item__Price>
              </ModelName__Price__Wrapper>
              <Like__Wrapper>
                <Like__Button src="/likeimg.png"></Like__Button>
                <Like__Number>20</Like__Number>
              </Like__Wrapper>
            </Item__Detail__Wrapper>
          </Best__Item__Wrapper>
        </Best__List__Wrapper>
      </Best__Items__Wrapper>

      <Sale__Wrapper>
        <Sale__Menu__Search__Wrapper>
          <Menu__Wrapper>
            <Now__Sale__Item>판매중상품</Now__Sale__Item>
            <SoldOut__Item>판매된상품</SoldOut__Item>
          </Menu__Wrapper>
          <Search__Wrapper>
            <Search__Input placeholder="제품을 검색해주세요."></Search__Input>
            <Date__Wrapper>
              <Calender__Img src="/cal.png"></Calender__Img>
              <Date__Start>2020.12.02</Date__Start>
              <Tilde> ~ </Tilde>
              <Calender__Img src="/cal.png"></Calender__Img>
              <Date__End>2020.12.02</Date__End>
            </Date__Wrapper>

            <Search__Button>검색</Search__Button>
          </Search__Wrapper>
        </Sale__Menu__Search__Wrapper>
        <Now__Sale__List__Wrapper>
          {new Array(10).fill(1).map((__) => (
            <Item__Wrapper>
              <Sale__Img__Detail__Wrapper>
                <Sale__Item__Img src="/160a.png"></Sale__Item__Img>
                <Sale__Item__Detail>
                  <Sale__Item__Title__Detail__Wrapper>
                    <Sale__Item__Title>
                      삼성전자 갤럭시탭A 10.1
                    </Sale__Item__Title>
                    <Sale__Item__ModelName>2019 LTE 32GB</Sale__Item__ModelName>
                    <Sale__Item__Tag>
                      #삼성전자 #갤럭시탭 #갓성비
                    </Sale__Item__Tag>
                  </Sale__Item__Title__Detail__Wrapper>
                  <Sale__UserName__Like__Wrapper>
                    <Sale__User__Icon src="/saleUserIcon.png"></Sale__User__Icon>
                    <Sale__UserName>판매자</Sale__UserName>
                    <Sale__Item__Like__Button src="/likeimg.png"></Sale__Item__Like__Button>
                    <Sale__Item__Like__Number>20</Sale__Item__Like__Number>
                  </Sale__UserName__Like__Wrapper>
                </Sale__Item__Detail>
              </Sale__Img__Detail__Wrapper>
              <Sale__Item__Price__Wrapper>
                <Sale__Item__Price__Img src="/w.png"></Sale__Item__Price__Img>
                <Sale__Item__Price>240,120원</Sale__Item__Price>
              </Sale__Item__Price__Wrapper>
            </Item__Wrapper>
          ))}
        </Now__Sale__List__Wrapper>
        <Regist__Item__Wrapper>
          <Regist__Button>상품 등록하기</Regist__Button>
        </Regist__Item__Wrapper>
      </Sale__Wrapper>
    </Wrapper>
  )
}

export default MarketMainUI
