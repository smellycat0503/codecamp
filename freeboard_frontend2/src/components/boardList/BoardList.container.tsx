//1. gql과 useQuery
//2. map사용하여 게시물 추가.
//3. 쿼리로 조회한 data를 presenter로 넘기자
import { useQuery } from "@apollo/client";
import { CONTENTS } from "./BoardList.queries";

import QueryUI from "./BoardList.presenter";
import { useRouter } from "next/router";
const Query = () => {
  const { data } = useQuery(CONTENTS);

  const router = useRouter();

  function onClickBoard(event) {
    router.push(`/board/${event.target.id}`);
    //! 내가 전에 적었던 글로 이동해야함-> _id를 찾으려면 ?
    //!우리는 페치보즈!를 가져옴. 글이 하나가 아님. -> 맵으로 뿌림-> [0,1,2]~이 있을거임.
    //!각자의 타이틀 아이디 가 여러개 있을거임 => 이걸 리스트페이지.-> 고유의 아이디를 뽑아주기 위해 타이틀에 id={abc._id}가 있음
    //! 각각의 글마다 있음.
    //! 온클릭.
  }

  console.log("데이타 리스,트", data);

  //   const aaavvvvv = "123123";
  //   const bbbqqqqqq = {
  //     name: "철수",
  //     age: 13,
  //   };

  return (
    <QueryUI
      data={data}
      onClickBoard={onClickBoard} /*aaa={aaavvvvv} bbb={bbbqqqqqq}*/
    />
  );
  // {
  //      data: data, // 서버에서 받은 객체
  //      aaa: aaavvvvvv, // 문자열
  //      bbb: bbbqqqqqq, // 직접만든 객체
  // }
};

export default Query;
