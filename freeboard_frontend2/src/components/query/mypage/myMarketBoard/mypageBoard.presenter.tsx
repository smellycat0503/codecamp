import {
  Mypage__Boardlist__Wrapper,
  BoardList__Top__Wrapper,
  Select__Delete__Button,
  BoardList__Body__Wrapper,
  BoardList__TopList__Wrapper,
  Top__CheckBox,
  Top__Number,
  Top__Title,
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
} from './mypageBoard.styles'

const myMarketBoardUI = () => {
  return (
    <>
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
    </>
  )
}

export default myMarketBoardUI
