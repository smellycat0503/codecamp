//1. gql과 useQuery
//2. map사용하여 게시물 추가.
//3. 쿼리로 조회한 data를 presenter로 넘기자
import { useQuery } from "@apollo/client";
import { CONTENTS } from "./BoardList.queries";

import QueryUI from "./BoardList.presenter";
const Query = () => {
  const { data } = useQuery(CONTENTS);

  console.log("데이타", data);

  //   const aaavvvvv = "123123";
  //   const bbbqqqqqq = {
  //     name: "철수",
  //     age: 13,
  //   };

  return <QueryUI data={data} /*aaa={aaavvvvv} bbb={bbbqqqqqq}*/ />;
  // {
  //      data: data, // 서버에서 받은 객체
  //      aaa: aaavvvvvv, // 문자열
  //      bbb: bbbqqqqqq, // 직접만든 객체
  // }
};

export default Query;
