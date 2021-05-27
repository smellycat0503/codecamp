import { useRouter } from "next/router";
import { useQuery, gql, useMutation } from "@apollo/client";
import ReactPlayer from "react-player";
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

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
import { useState } from "react";

export default function QuaryDetailPage() {
  const PILLOWS = gql`
    query ZZZ($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
        youtubeUrl
        likeCount
        dislikeCount
      }
    }
  `;

  // const LIKE_COUNT = gql`
  // mutation ZZZ($boardId:ID!){
  //   likeBoard(
  //     boardId:$boardId
  //   )
  // `;

  const STROKES = gql`
    mutation ZZZ(
      $title: String
      $contents: String
      $password: String
      $boardId: ID!
    ) {
      updateBoard(
        updateBoardInput: { title: $title, contents: $contents }
        password: $password
        boardId: $boardId
      ) {
        _id
        writer
        title
        contents
      }
    }
  `;

  const router = useRouter();

  // console.log("라우터", router);

  const [updateBoard] = useMutation(STROKES);

  const { data } = useQuery(PILLOWS, {
    variables: { boardId: router.query.ID },
  });

  console.log("데이터", data);

  // const [smellycat] = useMutation(PILLOWS);

  async function onClickUpdate() {
    try {
      // const { data } = await smellycat();
      router.push(`/board/${data.fetchBoard._id}/edit/`);
    } catch (error) {
      alert(error.message);
    }
  }

  // const [like] = useMutation(LIKE_COUNT);

  // async function onClickLike(){
  //   try{ const result = await like()

  //   }catch(error){
  //     alert(error.message)
  //   }
  // }

  // {data?.updateBoard.contents}
  return (
    <Wrapper>
      <FreeboardWrapper>
        <HeadWrapper>
          <HeadLeft>
            <Icon></Icon>
            <IdAndDateWrapper>
              <WriterID>
                {data?.fetchBoard.writer}
                {/* {data2?.updateBoard.writer} */}
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
          <Contents>
            {data === undefined ? "" : data.fetchBoard.contents}
            {/* {data?.updateBoard.contents} */}
          </Contents>
          <Movie>
            <ReactPlayer
              width={486}
              height={240}
              url={data?.fetchBoard.youtubeUrl}
            />
          </Movie>
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
          <ModifyButton onClick={onClickUpdate}>수정하기</ModifyButton>
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
          placeholder="개인정보 어쩌고고"
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
