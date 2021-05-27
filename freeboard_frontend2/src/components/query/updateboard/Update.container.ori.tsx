import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { UPDATE_BOARD } from "./Update.queries";

import QueryUI from "./Update.presenter";

const Query = () => {
  const [coke, setCoke] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [error, setError] = useState("");

  function onChangeInput(event) {
    const makcol = {
      writer: coke.writer,
      password: coke.password,
      title: coke.title,
      contents: coke.contents,
      [event.target.name]: event.target.value,
    };
    setCoke(makcol);
    console.log(makcol);
    if (
      !makcol.writer ||
      !makcol.password ||
      !makcol.title ||
      !makcol.contents
    ) {
      setError("내용을 작성해주세요.");
    } else {
      setError("");
    }
  }

  const router = useRouter();
  //! 여기 수정 페이지에서의 라우터는 조회와 이동 두가지!!

  // console.log("라우터", router);

  const [pepsi] = useMutation(UPDATE_BOARD);

  //   console.log(pepsi);=>의미없음

  // async function onClickPost() {
  //   try {
  //     const result = await pepsi({
  //       variables: {
  //         title: coke.title,
  //         contents: coke.contents,
  //         password: coke.password,
  //         boardId: router.query.ID,
  //         //! 라우터로 우리쪽에 저장된 ID를 조회. 여기 과정이 gql 로 넘어가는거임.
  //         //! 코크인 이유는 인풋 함수에서  setCoke(makcol) 에서 setCoke에 makcol(유저가 입력한 부분)이 들어갔기 때문
  //       },
  //     });
  //     console.log("리저트", result);
  //     router.push(`/board/${result.data.updateBoard._id}/edit`);
  //     //! 여기 경로를 어제 차마 못물어봄. 혼자서 찾아보자.
  //! const 다음에 {}를 누른 후 커맨드 i를 누르면 객체 안 내용이 확인 가능하다. 그 뒤의 경로는 gql에서 받아오는 경로 이름을 확인해야한다
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  async function onClickPost() {
    try {
      const result = await pepsi({
        variables: { ...coke, boardId: router.query.ID },
      });
      console.log("리저트", result);
      router.push(`/board/${result.data.updateBoard._id}`);
      //! const 다음에 {}를 누른 후 커맨드 i를 누르면 객체 안 내용이 확인 가능하다. 그 뒤의 경로는 gql에서 받아오는 경로 이름을 확인해야한다
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <QueryUI
      onClickPost={onClickPost}
      onChangeInput={onChangeInput}
      error={error}
    />
  );
};

export default Query;
