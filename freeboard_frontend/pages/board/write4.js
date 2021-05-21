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

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Router, useRouter } from "next/router";

export default function boardA() {
  const [radio, setRadio] = useState("");
  const [error, setError] = useState("");

  const [kakarot, setKakarot] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const DRAGONBALL = gql`
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

  const [buruma] = useMutation(DRAGONBALL);
  //const 뒤에 [] 잊지말기. []는 state처럼 그냥 약속인가?

  function onChangeInput(event) {
    const begita = { ...kakarot, [event.target.name]: event.target.value };
    setKakarot(begita);

    // const begita = {...kakarot, [event.target.name]:event.target.value}
    // setKakarot(begita) //value 입력값을 kakarot에 넣어라?
  }

  const router = useRouter();

  async function onClickPost() {
    try {
      const result = await buruma({
        variables: { ...kakarot },
      });
      console.log(result);
      router.push(`/board/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    } // catch()뒤에 중괄호 있어야함.
  }
  //     try{
  //         const result = await buruma({
  //             variables:{...kakarot}
  //         })//buruma() 괄호는 원래 넣는건가?
  //         alert("성공")
  //         console.log(result)
  //         console.log(kakarot)

  //         router.push(`/board/${result.data.createBoard._id}`)
  //     }catch(error){
  //         alert(error.message)
  //     }
  // }

  function WriteAddress(event) {
    const temp5 = event.target.value;
    setAddress(temp5);
  }
  function WriteRadio(event) {
    const temp6 = event.target.value;
    setRadio(temp6);
  }

  function ErrorMessage() {
    if (
      id.length === 0 ||
      pw === "" ||
      title1 === "" ||
      content2 === "" ||
      address === ""
    ) {
      setError("내용을 입력하세요.");
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
        <RegistButton onClick={ErrorMessage} onClick={onClickPost}>
          등록하기
        </RegistButton>
      </RegistWrapper>
    </Wrapper>
  );
}
