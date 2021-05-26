import ReactPlayer from "react-player";

import {
  Wrapper,
  FreeboardWrapper,
  HeadWrapper,
  HeadLeft,
  Icon,
  IdAndDateWrapper,
  CreateDate,
  HeadRightWrapper1,
  AddressBox,
  IconWrapper,
  AttachIcon,
  MapIcon,
  WriterID,
  BodyWrapper,
  BoardTitle,
  Picture,
  Contents,
  Movie,
  BottomWrapper,
  GoodWrapper,
  GoodIcon,
  GoodNumber,
  HateWrapper,
  HateIcon,
  HateNumber,
  Bottom__Button__Wrapper,
  Bottom2Wrapper,
  ListButton,
  ModifyButton,
  ReplyWrapper,
  ReplyTopWrapper,
  Replyicon,
  ReplyTitle,
  ReplyWriter,
  ReplyPassword,
  Star,
  Writer__Info__Wrapper,
  Content__textbox,
  Replyed__Contents__Wrapper,
  UserIcon,
  Writed__UserID,
  Comment__Rignt,
  Star__Wrapper,
  User__Comment,
  Id__And__Star__Wrapper,
  Writed__Date,
  TextCount,
  Reply__Write__button,
  Reply__Text__Bottom__Wrapper,
  Rewrite__Button,
  Delete__Button,
  Rewrite__And__Delete__Wrapper,
  Rewrite__Reply__Wrapper,
  Rewrite__Reply__Text,
  Reply__Text__count,
  // Reply__Rewrite__Button,
  Rewrite__Reply__Text__Count__Wrapper,
  Reply__Rewrite__Post__Button,
} from "./Query.Detail.Styles";

interface IProps {
  onClickUpdate: any;
  data: any;
  // type: any;
}
// {data}:Iprops로 하면 안됬음.\

//! js한 파일에서 관리할 떄에는 넘겨줄 필요가 없었던 data가 컴포넌트가 나눠지면서 이 페이지에서도 필요하게 ㄷ함!!

const Presenter = (props) => {
  return (
    <Wrapper>
      <FreeboardWrapper>
        <HeadWrapper>
          <HeadLeft>
            <Icon></Icon>
            <IdAndDateWrapper>
              <WriterID>{props.data?.fetchBoard.writer}</WriterID>
              <CreateDate>Date:2021.02.18</CreateDate>
            </IdAndDateWrapper>
          </HeadLeft>
          <HeadRightWrapper1>
            <AddressBox>
              서울특별시 영등포구 양산로 200 (영등포5가, 영등포시장역) 영등포
              타임스퀘어 2층
            </AddressBox>
            <IconWrapper>
              <AttachIcon></AttachIcon>
              <MapIcon></MapIcon>
            </IconWrapper>
          </HeadRightWrapper1>
        </HeadWrapper>
        <BodyWrapper>
          <BoardTitle>{props.data && props.data.fetchBoard.title}</BoardTitle>
          <Picture></Picture>
          <Contents>
            {props.data === undefined ? "" : props.data.fetchBoard.contents}
          </Contents>
          <Movie>
            <ReactPlayer
              width={486}
              height={240}
              url={props.data?.fetchBoard.youtubeUrl}
            />
          </Movie>
          <BottomWrapper>
            <GoodWrapper>
              <GoodIcon
                id={props.data?.fetchBoard._id}
                onClick={props.onClickLike}
              ></GoodIcon>
              <GoodNumber>{props.data?.fetchBoard.likeCount}</GoodNumber>
            </GoodWrapper>
            <HateWrapper>
              <HateIcon
                onClick={props.onClickHate}
                id={props.data?.fetchBoard._id}
              ></HateIcon>
              <HateNumber>{props.data?.fetchBoard.dislikeCount}</HateNumber>
            </HateWrapper>
          </BottomWrapper>
        </BodyWrapper>
      </FreeboardWrapper>
      <Bottom__Button__Wrapper>
        <ListButton>목록으로</ListButton>
        <ModifyButton onClick={props.onClickUpdate}>수정하기</ModifyButton>
      </Bottom__Button__Wrapper>
    </Wrapper>
  );
};

export default Presenter;
