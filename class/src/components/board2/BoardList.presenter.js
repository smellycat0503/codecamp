// import { Checkbox } from '@material-ui/core'
import {delBasePath} from 'next/dist/next-server/lib/router/router';
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
} from './BoardList.styles';

const BoardListPresenter = () => {
  // data.filter((data)=>data.fetchBoard.number )

  // let a= data.slice(-6)

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
        <LineWrapper>{}</LineWrapper>
      </BodyWrapper>
      <Deletebutton>선택 삭제</Deletebutton>
    </Wrapper>
  );
};

export default BoardListPresenter;
