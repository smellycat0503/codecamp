import Presenter from "./QueryDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { PILLOWS } from "./Query.Detail.queries";
import { GOOD, HATE } from "./Query.Detail.queries";
import { useState } from "react";
import { Password } from "../updateboard/Update.styles";
import Comments from "../comments/Comments.container";
const Container = () => {
  const router = useRouter();

  console.log("라우터", router);

  // const { data2 } = useQuery(STROKES, {
  //   variables: { boardId: router.query.ID },
  // });

  const { data, refetch } = useQuery(PILLOWS, {
    variables: { boardId: router.query.ID },
  });

  const [steive] = useMutation(GOOD);

  const [bob] = useMutation(HATE);

  console.log("데이터2", data);

  // const [smellycat] = useMutation(PILLOWS);

  async function onClickUpdate() {
    try {
      // const { dat4a } = await smellycat();
      router.push(`/board/${data.fetchBoard._id}/edit/`);
    } catch (error) {
      alert(error);
    }
  }
  // {data?.updateBoard.contents}

  async function onClickLike(event) {
    try {
      await steive({
        variables: {
          boardId: event.target.id,
        },
      });
      refetch();
      //const ifeelgood =  steive({ variables: event.target.id });
      //!원인 1. 베리어블즈에 보드:을 안넣었음! 넣고 객체로 담기 2.쿼리의 리패치를 사용하면 스스로 재조회를 1번 함.
    } catch (error) {
      alert("땡");
    }
  }

  async function onClickHate(event) {
    try {
      await bob({ variables: { boardId: event.target.id } });
      refetch();
      //! 1회 재 쿼리 실행. 화면에 바로 반영하기 위함!
    } catch (errer) {
      alert("땡");
    }
  }

  // }

  return (
    <>
      <Presenter
        onClickUpdate={onClickUpdate}
        data={data}
        onClickLike={onClickLike}
        onClickHate={onClickHate}
      />
      <Comments />
    </>
  );
};

export default Container;
