import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { useState } from "react";
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
} from "../../styles/Board.write";

export default function boardA() {
  const [ben, setBen] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });

  const [error, setError] = useState("");

  const PROFILE = gql`
    mutation ZZZ(
      $writer: String
      $password: String
      $title: String!
      $contents: String!
    ) {
      createBoard(
        createBoardInput: {
          writer: $writer
          password: $password
          title: $title
          contents: $contents
        }
      ) {
        _id
        writer
        title
        contents
      }
    }
  `;

  const [ann] = useMutation(PROFILE);
  const router = useRouter();

  function onChangeInput(event) {
    const jackson = {
      // ...ben,
      writer: ben.writer,
      title: ben.title,
      contents: ben.contents,
      password: ben.password,
      [event.target.name]: event.target.value,
    };

    // console.log(jackson);
    setBen(jackson);
    if (!ben.writer || !ben.title || !ben.contents || !ben.password) {
      setError("내용을 입력해주세요.");
    } else {
      setError("");
    }
  }

  async function onClickPost() {
    try {
      const result = await ann({
        variables: {
          writer: ben.writer,
          title: ben.title,
          contents: ben.contents,
          password: ben.password,
        },
      });
      router.push(`/board/${result.data.createBoard._id}`);
      //! push(``) 안 맨 처음 '/' 를 빼먹었었음!!
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <UserInfo>
        <Name>
          <NameTitle>작성자</NameTitle>
          <NameInput
            type="text"
            placeholder="이름을 적어주세요."
            name="writer"
            onChange={onChangeInput}
          ></NameInput>
          {/* 여기 name은 별 의미가 없는건가 -> 이름 바꿔도 페이지 바뀜. */}
          <ErrorMessage1>{error}</ErrorMessage1>
        </Name>
        <Password>
          <PasswordTitle>비밀번호</PasswordTitle>
          <PasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={onChangeInput}
          ></PasswordInput>
          <ErrorMessage1>{error}</ErrorMessage1>
        </Password>
      </UserInfo>

      <SubTitleWrapper>
        <SubTitle>제목</SubTitle>
        <SubTitleInput
          type="text"
          placeholder="제목을 작성해주세요."
          name="title"
          onChange={onChangeInput}
        ></SubTitleInput>
        <ErrorMessage1>{error}</ErrorMessage1>
      </SubTitleWrapper>

      <ContentWrapper>
        <ContentTitle>내용</ContentTitle>
        <ContentInput
          type="text"
          placeholder="내용을 작성해주세요."
          name="contents"
          onChange={onChangeInput}
        ></ContentInput>
        <ErrorMessage1>{error}</ErrorMessage1>
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
        <ErrorMessage1>{error}</ErrorMessage1>
      </AddressWrapper>

      <YoutubeWrapper>
        <YoutubeTitle>유튜브</YoutubeTitle>
        <YoutubeInput
          type="text"
          placeholder="링크를 복사해주세요."
        ></YoutubeInput>
        <ErrorMessage1>{error}</ErrorMessage1>
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
        <RegistButton onClick={onClickPost}>등록하기</RegistButton>
      </RegistWrapper>
    </Wrapper>
  );
}
