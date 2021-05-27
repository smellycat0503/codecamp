// import { Checkbox } from '@material-ui/core'
import {delBasePath} from 'next/dist/next-server/lib/router/router'
import {getDate} from '../commons/libraries/utils'
import {
  Wrapper,
  HeadLineWrapper,
  CheckboxInHead,
  TitleInHead,
  NumberInHead,
  DateInHead,
  BodyWrapper,
  LineWrapper,
  Checkbox1,
  Number,
  Title,
  Date,
  Deletebutton,
} from './BoardList.styles'

//! 이 프롭스 과정에서 또 객체화되므로 {}를 넣어줘야함!!!!!!!!!!!!!!
const BoardListPresenter = ({data}) => {
  // data.filter((data)=>data.fetchBoard.number )

  // let a= data.slice(-6)

  console.log(data)

  // a.map((data) => {
  //         <LineWrapper>
  //             <Checkbox1 type = "checkbox"></Checkbox1>
  //             <Number>{data.fetchBoard.number}</Number>
  //             <Title>{data.fetchBoard.title}</Title>
  //             <Date>{data.fetchBoard.createdAt}</Date>
  //         </LineWrapper>})

  // let a= data.fetchBoard.slice(-6)

  // const list = a.map((data) => {
  //         <LineWrapper>
  //             <Checkbox1 type = "checkbox"></Checkbox1>
  //             <Number>{data.fetchBoard.number}</Number>
  //             <Title>{data.fetchBoard.title}</Title>
  //             <Date>{data.fetchBoard.createdAt}</Date>
  //         </LineWrapper>})

  return (
    <Wrapper>
      <HeadLineWrapper>
        <CheckboxInHead type="checkbox"></CheckboxInHead>
        <NumberInHead>번호</NumberInHead>
        <TitleInHead>제목</TitleInHead>
        <DateInHead>작성일</DateInHead>
      </HeadLineWrapper>
      <BodyWrapper>
        {/* <LineWrapper>{data?.fetchBoards.map((data) => (<div>ass</div>))}</LineWrapper> */}
        {data?.fetchBoards.map((board) => (
          <LineWrapper>
            <Checkbox1 type="checkbox"></Checkbox1>
            <Number>{board.number}</Number>
            <Title>{board.title}</Title>
            <Date>{board.createdAt}</Date>
          </LineWrapper>
        ))}
      </BodyWrapper>
      <Deletebutton>선택 삭제</Deletebutton>
    </Wrapper>
  )
}

export default BoardListPresenter
