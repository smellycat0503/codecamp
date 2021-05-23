import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { CREATE_BOARD } from "./QueryWrite.queries";
import Presenter from "./QueryWrite.presenter";

// interface IErrorMessage{

// }

const Container = () => {
  const [qwer, setQwer] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [radio, setRadio] = useState("");
  const [error, setError] = useState("");

  function onChangeInput(event) {
    const iphone = { ...qwer, [event.target.name]: event.target.value };
    setQwer(iphone);

    if (!qwer.writer || !qwer.title || !qwer.password || !qwer.contents) {
      setError("내용을 작성해주세요");
    } else {
      setError("");
    }
    console.log(iphone);
  }

  const router = useRouter();

  const [muta] = useMutation(CREATE_BOARD);

  async function onClickPost() {
    try {
      const result = await muta({
        variables: { ...qwer },
      });
      // const id = result.data.createBoard._id;
      // alert(result.data.createBoard.message);
      console.log("리절트", result);
      router.push(`/board/${result.data.createBoard._id}`);
      //* push 경로 파악하기.
    } catch (error) {
      alert(error.message);
    }
  }

  function ErrorMessage(event) {
    if ({ ...qwer, writer: "", password: "", title: "", contents: "" }) {
    } else {
      setError("내용을 입력하세요.");
    }
  }

  // async function onClickUpdate(){

  // }

  return (
    <Presenter
      onChangeInput={onChangeInput}
      onClickPost={onClickPost}
      error={error}
      ErrorMessage={ErrorMessage}
    />
  );
};
export default Container;

//*시작
// import QueryUI from "./QueryWrite.presenter";
// import { useState } from "react";
// import { useMutation, gql } from "@apollo/client";
// import { Router, useRouter } from "next/router";
// import { DRAGONBALL } from "./QueryWrite.queries";

// const Query = () => {
//   const [isTrue, setIsTrue] = useState(false);

//   const [radio, setRadio] = useState("");
//   const [error, setError] = useState("");

//   const [kakarot, setKakarot] = useState({
//     writer: "",
//     password: "",
//     title: "",
//     contents: "",
//   });

//   const [buruma] = useMutation(DRAGONBALL);
//   //const 뒤에 [] 잊지말기. []는 state처럼 그냥 약속인가?

//   function onChangeInput(event) {
//     const begita = { ...kakarot, [event.target.name]: event.target.value };
//     setKakarot(begita);

//     if (
//       kakarot.writer &&
//       kakarot.password &&
//       kakarot.title &&
//       kakarot.contents
//     ) {
//       setKakarot(true);
//     } else {
//       setKakarot(false);
//     }
//     // const begita = {...kakarot, [event.target.name]:event.target.value}
//     // setKakarot(begita) //value 입력값을 kakarot에 넣어라?
//   }

//   const router = useRouter();

//   async function onClickPost() {
//     try {
//       const result = await buruma({
//         variables: { ...kakarot },
//       });
//       console.log(result);
//       router.push(`/board/${result.data.createBoard._id}`);
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   function WriteAddress(event) {
//     const temp5 = event.target.value;
//     setAddress(temp5);
//   }
//   function WriteRadio(event) {
//     const temp6 = event.target.value;
//     setRadio(temp6);
//   }

//   function ErrorMessage() {
//     if (
//       id.length === 0 ||
//       pw === "" ||
//       title1 === "" ||
//       content2 === "" ||
//       address === ""
//     ) {
//       setError("내용을 입력하세요.");
//     }
//   }

//   return (
//     <QueryUI
//       onChangeInput={onChangeInput}
//       onClickPost={onClickPost}
//       isTrue={isTrue}
//     />
//   );
// };

// export default Query;
