import ReactPlayer from 'react-player'
import {LikeOutlined, DislikeOutlined} from '@ant-design/icons'
import {ThumbUp} from '@material-ui/icons'

import {
  // All_Wrapper,
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
  NoPicture,
  Contents,
  Movie,
  BottomWrapper,
  GoodWrapper,
  GoodNumber,
  HateWrapper,
  HateNumber,
  Bottom__Button__Wrapper,
  ListButton,
  ModifyButton,
  Picture,
} from './Query.Detail.Styles'

interface IProps {
  onClickUpdate: any
  data: any
  // type: any;
}
// {data}:Iprops로 하면 안됬음.\

//! js한 파일에서 관리할 떄에는 넘겨줄 필요가 없었던 data가 컴포넌트가 나눠지면서 이 페이지에서도 필요하게 ㄷ함!!

const Presenter = (props) => {
  console.log(props.data)
  // console.log('asdfasdf', props.data?.fetchBoard._id)
  return (
    // <All_Wrapper>
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
          {props.data?.fetchBoard.image === [] ? (
            <NoPicture></NoPicture>
          ) : (
            <Picture
              src={`https://storage.cloud.google.com/${props.data?.fetchBoard.images}`}
            ></Picture>
          )}
          {/* <Picture></Picture> */}
          <Contents>
            {props.data === undefined ? '' : props.data.fetchBoard.contents}
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
              <ThumbUp
                onClick={props.onClickLike(props.data?.fetchBoard._id)}
              />
              <GoodNumber>{props.data?.fetchBoard.likeCount}</GoodNumber>
            </GoodWrapper>
            <HateWrapper>
              <DislikeOutlined
                onClick={props.onClickHate}
                id={props.data?.fetchBoard._id}
              />
              <HateNumber>{props.data?.fetchBoard.dislikeCount}</HateNumber>
            </HateWrapper>
          </BottomWrapper>
        </BodyWrapper>
      </FreeboardWrapper>
      <Bottom__Button__Wrapper>
        <ListButton onClick={props.onClickBoardList}>목록으로</ListButton>
        <ModifyButton onClick={props.onClickUpdate}>수정하기</ModifyButton>
      </Bottom__Button__Wrapper>
    </Wrapper>
    // </All_Wrapper>
  )
}

export default Presenter
