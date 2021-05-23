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
  const [raison, setRaison] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [error, setError] = useState("");

  const SEVENSTAR = gql`
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
  //! gql에서 받아와야 하는 부분에 _id가 빠졌었음. 식별을 위해 반드시 필요하므로 확인할 것.
  //! 클릭 후 접속이 안됬던 이유 => 받아오는 부분에 write'r'이 빠져있었음. 오타 주의.

  const router = useRouter();
  const [mildseven] = useMutation(SEVENSTAR);

  console.log("라우터", router);

  function onChangeInput(event) {
    const marlboro = {
      ...raison,
      [event.target.name]: event.target.value,
    };
    // const marlboro = {
    //    writer: "",
    //    password: "",
    //    title: "",
    //    contents: "",
    //    [event.target.name]: event.target.value
    // }

    setRaison(marlboro);
    console.log(marlboro);

    if (
      !raison.writer ||
      !raison.password ||
      !raison.title ||
      !raison.contents
    ) {
      setError("내용을 입력해주세요.");
    } else {
      setError("");
    }
  }

  async function onClickPost() {
    try {
      const result = await mildseven({
        variables: { ...raison },
      });
      // console.log("result", result); //*얘는 콘솔에 안나옴.
      router.push(`/board/${result.data.createBoard._id}`);
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
        <RegistButton onClick={error} onClick={onClickPost}>
          등록하기
        </RegistButton>
      </RegistWrapper>
    </Wrapper>
  );
}
