import {useEffect} from 'react'
import {
  Wrapper,
  Title,
  UserInfo,
  Name,
  NameTitle,
  NameInput,
  Password,
  PasswordTitle,
  PasswordInput,
  SubTitleWrapper,
  SubTitle,
  SubTitleInput,
  ContentWrapper,
  ContentTitle,
  ContentInput,
  AddressWrapper,
  AddressWrapperTitle,
  AddressWrapperInput1,
  AddressWrapperInput2,
  AddressWrapperLine1,
  AddressWrapperInputSearch,
  AddressWrapperInput3,
  YoutubeWrapper,
  YoutubeTitle,
  YoutubeInput,
  PhotoWrapper,
  PhotoTitle,
  PhotoContent,
  Photo_Wrapper,
  MainSettingWrapper,
  MainSettingTitle,
  MainSettingRadio1,
  MainSettingRadio2,
  Radio1,
  Radio2,
  RegistWrapper,
  RegistButton,
  ErrorMessage1,
  FONT,
  PlusIcon,
  UploadButton,
  PhotoInput,
  PreviewImg,
  Img__Del__Button,
  PreviewImg__Wrapper,
} from './QueryWrite.styles'

import {IProps} from './QueryWrite.types'

import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const Presenter = (props: IProps) => {
  return (
    <Wrapper>
      {!props.data ? (
        <Title>
          <FONT>게시물 등록</FONT>
          {/* 게시물 등록 */}
        </Title>
      ) : (
        <Title>게시물 수정</Title>
      )}
      <UserInfo>
        <Name>
          <NameTitle>작성자</NameTitle>
          <NameInput
            type="text"
            placeholder="이름을 적어주세요."
            name="writer"
            defaultValue={!props.data ? '' : props.data.fetchBoard.writer}
            onChange={props.onChangeInput}
            ref={props.inputRef}
          ></NameInput>
          {/* 여기 name은 별 의미가 없는건가 -> 이름 바꿔도 페이지 바뀜. */}
          <ErrorMessage1>{props.error}</ErrorMessage1>
        </Name>
        <Password>
          <PasswordTitle>비밀번호</PasswordTitle>
          <PasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={props.onChangeInput}
          ></PasswordInput>
          <ErrorMessage1>{props.error}</ErrorMessage1>
        </Password>
      </UserInfo>

      <SubTitleWrapper>
        <SubTitle>제목</SubTitle>
        <SubTitleInput
          type="text"
          placeholder="제목을 작성해주세요."
          name="title"
          onChange={props.onChangeInput}
        ></SubTitleInput>
        <ErrorMessage1>{props.error}</ErrorMessage1>
      </SubTitleWrapper>

      <ContentWrapper>
        <ContentTitle>내용</ContentTitle>
        <ContentInput
          type="text"
          placeholder="내용을 작성해주세요."
          name="contents"
          onChange={props.onChangeInput}
        ></ContentInput>
        <ErrorMessage1>{props.error}</ErrorMessage1>
      </ContentWrapper>

      <AddressWrapper>
        <AddressWrapperTitle>주소</AddressWrapperTitle>
        <AddressWrapperLine1>
          <AddressWrapperInput1
            type="text"
            placeholder="07250"
          ></AddressWrapperInput1>
          <AddressWrapperInputSearch>우편변호 검색</AddressWrapperInputSearch>
        </AddressWrapperLine1>

        <AddressWrapperInput2 type="text"></AddressWrapperInput2>
        <AddressWrapperInput3 type="text"></AddressWrapperInput3>
        <ErrorMessage1>{props.error}</ErrorMessage1>
      </AddressWrapper>

      <YoutubeWrapper>
        <YoutubeTitle>유튜브</YoutubeTitle>
        <YoutubeInput
          type="text"
          placeholder="링크를 복사해주세요."
          name="youtubeUrl"
          onChange={props.onChangeInput}
        ></YoutubeInput>
        <ErrorMessage1>{props.error}</ErrorMessage1>
      </YoutubeWrapper>

      <PhotoWrapper>
        <PhotoTitle>사진 첨부</PhotoTitle>

        {!props.isTrue ? (
          <PhotoContent>
            <Photo_Wrapper htmlFor="photo">
              <div style={{fontSize: '20px'}}>+</div>upload
              <PhotoInput
                id="photo"
                type="file"
                onChange={props.onChangeImage}
              ></PhotoInput>{' '}
            </Photo_Wrapper>
          </PhotoContent>
        ) : (
          <>
            <PreviewImg__Wrapper>
              <Img__Del__Button onClick={props.onClickdeleteImage}>
                X
              </Img__Del__Button>
              <PreviewImg src={props.myImg}></PreviewImg>
            </PreviewImg__Wrapper>
          </>
        )}
      </PhotoWrapper>

      <MainSettingWrapper>
        <MainSettingTitle>메인 설정</MainSettingTitle>
        <MainSettingRadio1
          type="radio"
          name="option"
          value="유튜브"
        ></MainSettingRadio1>
        <Radio1 htmlFor="유튜브">유튜브</Radio1>
        <MainSettingRadio2
          type="radio"
          name="option"
          value="사진"
        ></MainSettingRadio2>
        <Radio2 htmlFor="사진">사진</Radio2>
        {/* 리액트에서 라디오버튼은 내용을 밖에 적어야한다  */}
      </MainSettingWrapper>

      <RegistWrapper>
        <RegistButton
          onClick={props.onClickPost}
          // variant="outlined" //!얘는 필요 없어서 생략해봄. 문제 없었음.
          color="primary"
        >
          등록하기
        </RegistButton>
        {/* //모달 시도 1. 프롭스 앞에 넣기. 2. */}
        {props.open && (
          <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{'등록 완료'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                게시물이 정상적으로 등록되었습니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={props.handleClose} color="primary">
            Disagree
          </Button> */}
              <Button onClick={props.handleClose} color="primary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {/* //모달 시도 */}
      </RegistWrapper>
    </Wrapper>
  )
}

export default Presenter
//*시작
// import {
//   Wrapper,
//   Title,
//   UserInfo,
//   Name,
//   NameTitle,
//   NameInput,
//   Password,
//   PasswordTitle,
//   PasswordInput,
//   SubTitleWrapper,
//   SubTitle,
//   SubTitleInput,
//   ContentWrapper,
//   ContentTitle,
//   ContentInput,
//   AddressWrapper,
//   AddressWrapperTitle,
//   AddressWrapperInput1,
//   AddressWrapperInput2,
//   AddressWrapperLine1,
//   AddressWrapperInputSearch,
//   AddressWrapperInput3,
//   YoutubeWrapper,
//   YoutubeTitle,
//   YoutubeInput,
//   PhotoWrapper,
//   PhotoTitle,
//   PhotoContent,
//   Photo1,
//   MainSettingWrapper,
//   MainSettingTitle,
//   MainSettingRadio1,
//   MainSettingRadio2,
//   Radio1,
//   Radio2,
//   RegistWrapper,
//   RegistButton,
//   ErrorMessage1,
// } from "../../styles/Board.write";

// const QueryUI = (props) => {
//   console.log(props.isTrue);
//   return (
//     <Wrapper>
//       <Title>게시물 등록</Title>
//       <UserInfo>
//         <Name>
//           <NameTitle>작성자</NameTitle>
//           <NameInput
//             type="text"
//             placeholder="이름을 적어주세요."
//             name="writer"
//             onChange={props.onChangeInput}
//           ></NameInput>
//           <ErrorMessage1>{error}</ErrorMessage1>
//         </Name>
//         <Password>
//           <PasswordTitle>비밀번호</PasswordTitle>
//           <PasswordInput
//             type="password"
//             placeholder="비밀번호를 입력해주세요."
//             name="password"
//             onChange={props.onChangeInput}
//           ></PasswordInput>
//           <ErrorMessage1>{error}</ErrorMessage1>
//         </Password>
//       </UserInfo>

//       <SubTitleWrapper>
//         <SubTitle>제목</SubTitle>
//         <SubTitleInput
//           type="text"
//           placeholder="제목을 작성해주세요."
//           name="title"
//           onChange={props.onChangeInput}
//         ></SubTitleInput>
//         <ErrorMessage1>{error}</ErrorMessage1>
//       </SubTitleWrapper>

//       <ContentWrapper>
//         <ContentTitle>내용</ContentTitle>
//         <ContentInput
//           type="text"
//           placeholder="내용을 작성해주세요."
//           name="contents"
//           onChange={props.onChangeInput}
//         ></ContentInput>
//         <ErrorMessage1>{error}</ErrorMessage1>
//       </ContentWrapper>

//       <AddressWrapper>
//         <AddressWrapperTitle>주소</AddressWrapperTitle>
//         <AddressWrapperLine1>
//           <AddressWrapperInput1
//             type="text"
//             placeholder="07250"
//           ></AddressWrapperInput1>
//           <AddressWrapperInputSearch>우편변호 검색</AddressWrapperInputSearch>
//         </AddressWrapperLine1>

//         <AddressWrapperInput2 type="text"></AddressWrapperInput2>
//         <AddressWrapperInput3 type="text"></AddressWrapperInput3>
//         <ErrorMessage1>{error}</ErrorMessage1>
//       </AddressWrapper>

//       <YoutubeWrapper>
//         <YoutubeTitle>유튜브</YoutubeTitle>
//         <YoutubeInput
//           type="text"
//           placeholder="링크를 복사해주세요."
//         ></YoutubeInput>
//         <ErrorMessage1>{error}</ErrorMessage1>
//       </YoutubeWrapper>

//       <PhotoWrapper>
//         <PhotoTitle>사진 첨부</PhotoTitle>
//         <PhotoContent>
//           <Photo1></Photo1>
//           <Photo1></Photo1>
//           <Photo1></Photo1>
//         </PhotoContent>
//       </PhotoWrapper>

//       <MainSettingWrapper>
//         <MainSettingTitle>메인 설정</MainSettingTitle>
//         <MainSettingRadio1
//           type="radio"
//           name="option"
//           value="유튜브"
//         ></MainSettingRadio1>
//         <Radio1 htmlFor="유튜브">유튜브</Radio1>
//         <MainSettingRadio2
//           type="radio"
//           name="option"
//           value="사진"
//         ></MainSettingRadio2>
//         <Radio2 htmlFor="사진">사진</Radio2>
//         {/* 리액트에서 라디오버튼은 내용을 밖에 적어야한다  */}
//       </MainSettingWrapper>

//       <RegistWrapper>
//         <RegistButton
//           onClick={ErrorMessage}
//           onClick={props.onClickPost}
//           isTrue={props.isTrue}
//         >
//           등록하기
//         </RegistButton>
//       </RegistWrapper>
//     </Wrapper>
//   );
// };

// export default QueryUI;

// useEffect(()=>{
//   asdfdasfdsf
// },[data])
//*끝
