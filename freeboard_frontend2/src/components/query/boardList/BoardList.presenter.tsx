import {getDate} from '../../../commons/libraries/utils'
import {
  Wrapper,
  Title,
  Best__List__Wrapper,
  Best__Post__Wrapper,
  Search__Wrapper,
  Search__Input,
  Date__Range__Wrapper,
  Calendar__Img,
  DateStart,
  From__To,
  DateEnd,
  Search__Button,
  Board__Wrapper,
  Board__Title__Wrapper,
  Board__Number,
  Board__Title,
  Board__Writer,
  Board__Date,
  Board__Content__Wrapper,
  Board__Number__Content,
  Board__Title__Content,
  Board__Writer__Content,
  Board__Date__Content,
  Page,
  Page__And__Write__Wrapper,
  Write__Button,
  FONT,
  Best__Post__IMG,
  Best__Post__Title,
  Best__Post__Icon,
  Best__Post__Name,
  Best__Post__Date,
  Best__Post__GoodIcon,
  Best__Post__GoodNumber,
  Best__Name__And__Icon__Wrapper,
  Best__Post__Good__And__Counter__Wrapper,
  Best__Name__And__Icon__And__Date__Wrapper,
  Best__Post__Bottom__Content__Wrapper,
  Prev__Page,
  Next_Page,
} from './BoardList.styles'

import {IProps} from './BoardList.types'

//*뮤테이션 떄는 첫 함수 ()에 props를 썼는데, 쿼리 시 사용하지 않는 이유? 써도 되나? 뮤테이션떄는 함수 기능을 가져올때 씀.
//! =>props와 {}의 차이는 없음. 어떤걸 써도 됨. 선택할 때 이유만 있으면 됨, 본인이 편한 것. 기능적인 차이는 없음.
//! =>중요한 건 자신만의 기준이 있어야 함.
//글 번호를 조회할 수 없음.example서버에서 쿼리 사용할 때엔 불러오는 갯수가 정해져있었으나 여기선 안정해져있음
//! =>회사마다 다름// 수업내용 기준으로는 map()괄호 안에 index를 넣으면 번호가 생김.0부터 시작하므로 +1적용.

//만약 QueryUI에 {data}를 넣는다면, 전에 이 과정에서 객체에 담겨서 온다고
//들었는데 이미 객체에 담겨오는 것을 또 {}로 감사는 이유.
//! => 구조분해할당 개념으로 파악하기.
//map 사용 시 {data.fetchBoards}가 아닌 data?.의 ?를 붙이는 이유.=> 옵셔널 체이닝. 사용 판단 기준이 뭘까.

// import {IProps} from './BoardList.types'

const QueryUI: any = (Props: IProps) => {
  return (
    <Wrapper>
      <Title>베스트 게시글</Title>
      <Best__List__Wrapper>
        {Props.bestPostList?.fetchBoardsOfTheBest.map((bestfour) => (
          <Best__Post__Wrapper>
            <Best__Post__IMG src="/rocky.jpeg"></Best__Post__IMG>
            <Best__Post__Title onClick={Props.onClickBoard} id={bestfour._id}>
              {bestfour.title}
            </Best__Post__Title>
            <Best__Post__Bottom__Content__Wrapper>
              <Best__Name__And__Icon__And__Date__Wrapper>
                <Best__Name__And__Icon__Wrapper>
                  <Best__Post__Icon src="/icon2.png"></Best__Post__Icon>
                  <Best__Post__Name>{bestfour.writer}</Best__Post__Name>
                </Best__Name__And__Icon__Wrapper>
                <Best__Post__Date>
                  {getDate(bestfour.createdAt)}
                </Best__Post__Date>
              </Best__Name__And__Icon__And__Date__Wrapper>
              <Best__Post__Good__And__Counter__Wrapper>
                <Best__Post__GoodIcon src="/good2.png"></Best__Post__GoodIcon>
                <Best__Post__GoodNumber>
                  {bestfour.likeCount}
                </Best__Post__GoodNumber>
              </Best__Post__Good__And__Counter__Wrapper>
            </Best__Post__Bottom__Content__Wrapper>
          </Best__Post__Wrapper>
        ))}
      </Best__List__Wrapper>
      <Search__Wrapper>
        <Search__Input
          name="search"
          onChange={Props.InputSearch}
        ></Search__Input>
        <Date__Range__Wrapper>
          <Calendar__Img src="/cal.png"></Calendar__Img>
          <DateStart>2020.12.02</DateStart>
          <From__To> ~ </From__To>
          <Calendar__Img src="/cal.png"></Calendar__Img>
          <DateEnd>2020.12.02</DateEnd>
        </Date__Range__Wrapper>
        <Search__Button onClick={Props.onClickSearch}>검색하기</Search__Button>
      </Search__Wrapper>

      <Board__Wrapper>
        <Board__Title__Wrapper>
          <Board__Number>번호</Board__Number>
          <Board__Title>제목</Board__Title>
          <Board__Writer>작성자</Board__Writer>
          <Board__Date>날짜</Board__Date>
        </Board__Title__Wrapper>

        {Props.dataComments?.fetchBoards.map((abc, index) => (
          <Board__Content__Wrapper key={abc._id}>
            <Board__Number__Content>
              {Props.currentPage === 1
                ? index + 1
                : index + 1 + (Props.currentPage - 1) * 10}
            </Board__Number__Content>
            <Board__Title__Content onClick={Props.onClickBoard} id={abc._id}>
              {/* //여기서 id=의 id는 container의 event.target.id로 들어간다. */}
              {abc.title}
            </Board__Title__Content>
            <Board__Writer__Content>{abc.writer}</Board__Writer__Content>
            <Board__Date__Content>
              {getDate(abc.createdAt)}
            </Board__Date__Content>
          </Board__Content__Wrapper>
        ))}
      </Board__Wrapper>
      <Page__And__Write__Wrapper>
        <Prev__Page
          onClick={Props.onClickPrevPage}
          src="/left.png"
        ></Prev__Page>
        {Props.boardcount?.fetchBoardsCount < 10
          ? //글 수 자체가 10개보다 적을 때메만 적용되야함
            new Array(10)
              .fill(1)
              .filter(
                (_, index) =>
                  index + 1 <=
                  Math.ceil(Props.boardcount?.fetchBoardsCount / 10)
              )
              .map((_, index) => (
                <>
                  <Page
                    id={String(index + 1)}
                    onClick={Props.onClickPageNumber}
                    isActive={Props.currentPage === index + 1}
                  >
                    {index + 1}
                  </Page>
                </>
              ))
          : new Array(10)
              .fill(1)
              .filter(
                (_, index) =>
                  index + 1 + Props.nextPage * 10 <=
                  Math.ceil(Props.boardcount?.fetchBoardsCount / 10)
              )
              .map((_, index) => (
                <>
                  <Page
                    id={String(index + 1 + Props.nextPage * 10)}
                    onClick={Props.onClickPageNumber}
                    isActive={
                      Props.currentPage === index + 1 + Props.nextPage * 10
                    }
                  >
                    {index + Props.nextPage * 10 + 1}
                  </Page>
                </>
              ))}
        <Next_Page onClick={Props.onClickextPage} src="/right2.png"></Next_Page>
        <Write__Button onClick={Props.onClickPostButton}>
          게시물 등록하기
        </Write__Button>
      </Page__And__Write__Wrapper>
    </Wrapper>
  )
}

export default QueryUI
