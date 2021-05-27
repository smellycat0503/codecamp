import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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
} from "../../../styles/id.index";

export default function QuaryDetailPage() {
  const router = useRouter();
  //여기서의 라우터는 이동 용도가 아닌 프론트 쪽의 데이터를 가져오기 위한 용도.

  const glass = gql`
    query family($dad: ID!) {
      fetchBoard(boardId: $dad) {
        _id
        writer
        title
        contents
      }
    }
  `;

  // console.log("router.query", router.query);
  console.log("라우터", router);
  const { data } = useQuery(glass, {
    variables: { dad: router.query.ID },
    //여기 경로는 서버가 아니 우리쪽 기준.
  });
  console.log("데이타", data);
  // console.log(router.query)

  return (
    <Wrapper>
      <FreeboardWrapper>
        <HeadWrapper>
          <HeadLeft>
            <Icon></Icon>
            <IdAndDateWrapper>
              <WriterID>
                {data === undefined ? "" : data.fetchBoard.writer}
              </WriterID>
              <CreateDate type="text">Date:2021.02.18</CreateDate>
            </IdAndDateWrapper>
          </HeadLeft>
          <HeadRightWrapper1>
            <AddressBox type="text">
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
          <BoardTitle>{data && data.fetchBoard.title}</BoardTitle>
          <Picture></Picture>
          <Contents>{!data ? "" : data.fetchBoard.contents}</Contents>
          <Movie></Movie>
          <BottomWrapper>
            <GoodWrapper>
              <GoodIcon></GoodIcon>
              <GoodNumber>1920</GoodNumber>
            </GoodWrapper>
            <HateWrapper>
              <HateIcon></HateIcon>
              <HateNumber>1920</HateNumber>
            </HateWrapper>
          </BottomWrapper>
        </BodyWrapper>
      </FreeboardWrapper>

      <Bottom2Wrapper>
        <Bottom__Button__Wrapper>
          <ListButton>목록으로</ListButton>
          <ModifyButton>수정하기</ModifyButton>
        </Bottom__Button__Wrapper>

        <ReplyTopWrapper>
          <Replyicon src="/vector.png"></Replyicon>
          <ReplyTitle>댓글</ReplyTitle>
        </ReplyTopWrapper>
        <Writer__Info__Wrapper>
          <ReplyWriter type="text" placeholder="작성자"></ReplyWriter>
          <ReplyPassword type="text" placeholder="비밀번호"></ReplyPassword>
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
          placeholder="개인정보 어쩌고"
        ></Content__textbox>
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
}
