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
  Photo1,
  MainSettingWrapper,
  MainSettingTitle,
  MainSettingRadio1,
  MainSettingRadio2,
  Radio1,
  Radio2,
  RegistWrapper,
  RegistButton,
  ErrorMessage1,
} from "./Update.styles";

interface IProps {
  onChangeInput: any;
  onClickPost: any;
  error: any;
  ErrorMessage: any;
  //*여기는 컨테이너에서 넘어온 것들을 그대로 가져오면 됨.
  //*임의로 any 설정.
}

const QueryUI = (props) => {
  return (
    <Wrapper>
      <Title>게시물 수정</Title>
      <UserInfo>
        <Name>
          <NameTitle>작성자</NameTitle>
          <NameInput
            type="text"
            placeholder="이름을 적어주세요."
            name="writer"
            onChange={props.onChangeInput}
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
        ></YoutubeInput>
        <ErrorMessage1>{props.error}</ErrorMessage1>
      </YoutubeWrapper>

      <PhotoWrapper>
        <PhotoTitle>사진 첨부</PhotoTitle>
        <PhotoContent>
          <Photo1></Photo1>
          <Photo1></Photo1>
          <Photo1></Photo1>
        </PhotoContent>
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
        <RegistButton onClick={props.onClickPost}>등록하기</RegistButton>
      </RegistWrapper>
    </Wrapper>
  );
};

export default QueryUI;
