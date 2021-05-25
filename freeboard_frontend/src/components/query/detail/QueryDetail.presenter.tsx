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
} from "./Query.Detail.Styles";

interface IProps {
  onClickUpdate: any;
  data: any;
  type: any;
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
              <WriterID>
                {props.data?.fetchBoard.writer}
                {/* {data2?.updateBoard.writer} */}
              </WriterID>
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
            {/* {data?.updateBoard.contents} */}
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

      <Bottom2Wrapper>
        <Bottom__Button__Wrapper>
          <ListButton>목록으로</ListButton>
          <ModifyButton onClick={props.onClickUpdate}>수정하기</ModifyButton>
        </Bottom__Button__Wrapper>

        <ReplyTopWrapper>
          <Replyicon src="/vector.png"></Replyicon>
          <ReplyTitle>댓글</ReplyTitle>
        </ReplyTopWrapper>
        <Writer__Info__Wrapper>
          <ReplyWriter
            name="writer"
            type="text"
            onChange={props.onChangeReplyInput}
            placeholder="작성자"
          ></ReplyWriter>
          <ReplyPassword
            name="password"
            type="text"
            placeholder="비밀번호"
            onChange={props.onChangeReplyInput}
          ></ReplyPassword>
          <Star__Wrapper>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
            <Star src="/Star.png"></Star>
          </Star__Wrapper>
        </Writer__Info__Wrapper>
        <Content__textbox
          type="text"
          placeholder="개인정보 어쩌고고"
          name="contents"
          onChange={props.onChangeReplyInput}
        ></Content__textbox>
        <Reply__Text__Bottom__Wrapper>
          <TextCount type="text"></TextCount>
          <Reply__Write__button onClick={props.onClickReplyInput}>
            등록하기
          </Reply__Write__button>
        </Reply__Text__Bottom__Wrapper>
        {props.datareply?.fetchBoardComments.map((asd) => (
          <Replyed__Contents__Wrapper>
            <UserIcon src="/useri.png"></UserIcon>
            <Comment__Rignt>
              <Id__And__Star__Wrapper>
                <Writed__UserID>{asd.writer}</Writed__UserID>

                <Star src="/Star.png"></Star>
                <Star src="/Star.png"></Star>
                <Star src="/Star.png"></Star>
                <Star src="/Star.png"></Star>
                <Star src="/Star.png"></Star>
              </Id__And__Star__Wrapper>
              <User__Comment>{asd.contents}</User__Comment>
              <Writed__Date>{asd.createdAt}</Writed__Date>
            </Comment__Rignt>
          </Replyed__Contents__Wrapper>
        ))}
        <Replyed__Contents__Wrapper>
          <UserIcon src="/useri.png"></UserIcon>
          <Comment__Rignt>
            <Id__And__Star__Wrapper>
              <Writed__UserID>노원두</Writed__UserID>

              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
            </Id__And__Star__Wrapper>
            <User__Comment>
              진짜 유익하고 필요한 정보인 것 같아요~!
            </User__Comment>
            <Writed__Date>2021.02.22</Writed__Date>
          </Comment__Rignt>
        </Replyed__Contents__Wrapper>
      </Bottom2Wrapper>
    </Wrapper>
  );
};

export default Presenter;
