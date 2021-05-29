import {useState} from 'react'
import {useMutation, useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

import {CREATE_BOARD, PILLOWS} from './QueryWrite.queries'
import Presenter from './QueryWrite.presenter'

// interface IErrorMessage{

// }

const Container = () => {
  const router = useRouter()
  const [qwer, setQwer] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
    youtubeUrl: '',
  })

  const [radio, setRadio] = useState('')
  const [error, setError] = useState('')

  const {data} = useQuery(PILLOWS, {
    variables: {boardId: router.query.ID},
  })
  console.log(data, 'asdsadsada')

  function onChangeInput(event) {
    const iphone = {...qwer, [event.target.name]: event.target.value}
    setQwer(iphone)

    if (
      !qwer.writer ||
      !qwer.title ||
      !qwer.password ||
      !qwer.contents ||
      !qwer.youtubeUrl
    ) {
      setError('내용을 작성해주세요')
    } else {
      setError('')
    }
    console.log(iphone)
  }

  const [muta] = useMutation(CREATE_BOARD)

  const [a, setA] = useState('')
  //!! 모달 작업 과정.

  async function onClickPost() {
    try {
      const result = await muta({
        variables: {...qwer},
      })
      // const id = result.data.createBoard._id;
      // alert(result.data.createBoard.message);
      setA(result.data.createBoard._id)
      handleClickOpen()
      console.log('리절트', result)
      // router.push(`/board/${result.data.createBoard._id}`)
      //! 리절트를 밖으로 꺼내기 위해 1. 유즈스테이트 사용. 기본값 별도로 필요치 않으므로 '' 사용. 2. 여기서의 결과를 셋A로 꺼내어 a에 넣는다.
      //* push 경로 파악하기.
    } catch (error) {
      alert(error.message)
    }
  }

  //! 모달 시도.

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    router.push(`/board/${a}`)
    //! 3. 팝업 뜬 후 확인 버튼 누른 다음에 다음 화면으로 넘어가야 하기 때문에 셋오픈이 false가 될 때 라우터푸쉬 적용.
  }

  //!

  return (
    <Presenter
      onChangeInput={onChangeInput}
      onClickPost={onClickPost}
      error={error}
      data={data}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
    />
  )
}
export default Container

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
