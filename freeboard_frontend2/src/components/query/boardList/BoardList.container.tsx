//1. gql과 useQuery
//2. map사용하여 게시물 추가.
//3. 쿼리로 조회한 data를 presenter로 넘기자
import {useQuery} from '@apollo/client'
import {CONTENTS, COMMENTS, BEST_POST, BOARDCOUNT} from './BoardList.queries'

import QueryUI from './BoardList.presenter'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
const Query = () => {
  const {data} = useQuery(CONTENTS)

  const router = useRouter()

  function onClickBoard(event) {
    router.push(`/board/${event.target.id}`)
    //! 내가 전에 적었던 글로 이동해야함-> _id를 찾으려면 ?
    //!우리는 페치보즈!를 가져옴. 글이 하나가 아님. -> 맵으로 뿌림-> [0,1,2]~이 있을거임.
    //!각자의 타이틀 아이디 가 여러개 있을거임 => 이걸 리스트페이지.-> 고유의 아이디를 뽑아주기 위해 타이틀에 id={abc._id}가 있음
    //! 각각의 글마다 있음.
    //! 온클릭.
  }

  console.log('데이타 리스,트', data)

  //   const aaavvvvv = "123123";
  //   const bbbqqqqqq = {
  //     name: "철수",
  //     age: 13,
  //   };

  //*페이지네이션 도전

  //! 기본값 1로 넣기? 어떻게 활용될지 작성하면서 알아보자.
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, SetNextPage] = useState(0)
  const [prevPage, setPrevPage] = useState(0)

  // const clickNumber = 1

  //! 페이지 쿼리 만들기.  클릭 시의 경로를 넣어야 할 것 같음.  page의 경로 만들어보기.
  const {data: dataComments} = useQuery(COMMENTS, {
    variables: {page: currentPage},
  })

  // console.log('게시글목록', dataComments)

  const onClickPageNumber = (event) => {
    setCurrentPage(Number(event.target.id))
    //!여기서는 숫자로 받아야 하고 프레젠터에서는 문자로 받아야 하기 떄문.
  }

  const onClickPostButton = () => {
    router.push(`/board/write.tsx`)
  }

  //!베스트 도전
  const {data: bestPostList} = useQuery(BEST_POST)
  console.log('bestPostList', bestPostList)
  //!

  //! 페이지네이션 도전

  const {data: boardcount} = useQuery(BOARDCOUNT)

  // console.
  console.log('글몇개냐', boardcount?.fetchBoardsCount)

  //!페이지네이션 이전페이지 숫자 클릭 시 함수 작성
  const onClickPrevPage = () => {
    if (prevPage * 10 >= 1) {
      setPrevPage(prevPage - 1)
    }
    console.log('prev잘되나', prevPage)
  }

  //!페이지네이션의 다음페이지 숫자를 클릭했을 시 함수 작성.
  const onClickextPage = () => {
    if (nextPage * 10 < Math.floor(boardcount?.fetchBoardsCount / 10)) {
      SetNextPage(nextPage + 1)
    }

    console.log(nextPage)
  }

  return (
    <QueryUI
      data={data}
      onClickBoard={onClickBoard} /*aaa={aaavvvvv} bbb={bbbqqqqqq}*/
      dataComments={dataComments}
      onClickPageNumber={onClickPageNumber}
      currentPage={currentPage}
      onClickPostButton={onClickPostButton}
      bestPostList={bestPostList}
      onClickextPage={onClickextPage}
      // clickNumber={clickNumber}
      nextPage={nextPage}
      boardcount={boardcount}
      onClickPrevPage={onClickPrevPage}
    />
  )
  // {
  //      data: data, // 서버에서 받은 객체
  //      aaa: aaavvvvvv, // 문자열
  //      bbb: bbbqqqqqq, // 직접만든 객체
  // }
}

export default Query
