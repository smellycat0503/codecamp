//1. gql과 useQuery
//2. map사용하여 게시물 추가.
//3. 쿼리로 조회한 data를 presenter로 넘기자
import {useQuery} from '@apollo/client'
import {CONTENTS, COMMENTS, BEST_POST, BOARDCOUNT} from './BoardList.queries'

import QueryUI from './BoardList.presenter'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../../commons/types/generated/types'
const Query = () => {
  const {data} = useQuery<IQuery, IQueryFetchBoardsArgs>(CONTENTS)

  const router = useRouter()
  const [search, setSearch] = useState('')
  function onClickBoard(event) {
    router.push(`/board/${event.target.id}`)
    //! 내가 전에 적었던 글로 이동해야함-> _id를 찾으려면 ?
    //!우리는 페치보즈!를 가져옴. 글이 하나가 아님. -> 맵으로 뿌림-> [0,1,2]~이 있을거임.
    //!각자의 타이틀 아이디 가 여러개 있을거임 => 이걸 리스트페이지.-> 고유의 아이디를 뽑아주기 위해 타이틀에 id={abc._id}가 있음
    //! 각각의 글마다 있음.
    //! 온클릭.
  }

  // console.log('데이타 리스,트', data)

  //   const aaavvvvv = "123123";
  //   const bbbqqqqqq = {
  //     name: "철수",
  //     age: 13,
  //   };

  // const [pageArr, setPageArr] = useState([1,2,3,4,5,6,7,8,9,10])
  // useEffect(() => {
  //   if (count < 10) {
  //     let newArr = []
  //     for (let i = 1; i < count / 10; i++) {
  //       newArr.push(i)
  //     }
  //     setPageArr(newArr)
  //   }
  // }, [count])

  //*페이지네이션 도전

  //! 기본값 1로 넣기? 어떻게 활용될지 작성하면서 알아보자.
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, SetNextPage] = useState(0)
  const [prevPage, setPrevPage] = useState(0)

  // const clickNumber = 1

  //! 페이지 쿼리 만들기.  클릭 시의 경로를 넣어야 할 것 같음.  page의 경로 만들어보기.
  const {data: dataComments} = useQuery<IQuery>(COMMENTS, {
    variables: {
      page: currentPage,
      search: search,
      //! 서치 두링 이름 같으니 생략 가능!!
    },
  })

  // console.log('게시글목록', dataComments)

  const onClickPageNumber = (event) => {
    setCurrentPage(Number(event.target.id))
    //!여기서는 숫자로 받아야 하고 프레젠터에서는 문자로 받아야 하기 떄문.
  }

  const onClickPostButton = () => {
    router.push(`/board/write`)
  }

  //!베스트 도전
  const {data: bestPostList} =
    useQuery<IQuery, IQueryFetchBoardsArgs>(BEST_POST)
  // console.log('bestPostList', bestPostList)

  //! 페이지네이션 도전

  const {data: boardcount} = useQuery<IQuery, IQueryFetchBoardsArgs>(
    BOARDCOUNT,
    {
      variables: {
        search: search,
      },
    }
  )
  //!검색 결과 찾기-> 쿼리를 처음에 보드카운트가 아닌 커맨츠를 불렀음. 글 수를 기준으로 계산해야 하므로 얘를 사용!!
  // console.
  // console.log('글몇개냐', boardcount?.fetchBoardsCount)

  //!페이지네이션 이전페이지 숫자 클릭 시 함수 작성
  const onClickPrevPage = () => {
    if (nextPage > 0) {
      SetNextPage(nextPage - 1)
    }
    // if (prevPage * 10 >= 1) {
    //   setPrevPage(prevPage - 1)
    // }
    // // console.log('prev잘되나', prevPage)
  }

  // useEffect(() => {
  //   console.log(nextPage, 'nextPage')
  // }, [nextPage])
  //useEffect 는 화면이 랜더링 된 후에 [  ]를 실행해주는 것.
  //이 경우는 nextpage가 바뀔 경우에 해당 nextpage가 랜더링!!

  //!페이지네이션의 다음페이지 숫자를 클릭했을 시 함수 작성.
  const onClickextPage = () => {
    if (nextPage * 10 < Math.ceil(boardcount?.fetchBoardsCount / 10)) {
      SetNextPage(nextPage + 1)
    }

    // console.log(nextPage)
  }

  //! 검색 도전

  const [inputForSearch, setInputForSearch] = useState('')

  //! 디바운싱 적용
  const InputSearch = (event) => {
    let timer
    if (timer) {
      // 이전 요청의 timer가 남아있다면 지우기
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      setSearch(event.target.value)
    }, 700)

    // console.log(search)
  }
  //!디바운싱 범위

  //!여기서 셋서치를 하나 더 만들어서 변수에 담아서,온클릭서치에 담아야 한다 이유는
  //! 셋 서치(스테이트)는 바뀌는 순간 바로 렌더링이 되므로! 스테이트 변수에 한번 더 따로 담아야 한다

  const onClickSearch = () => {
    setSearch(inputForSearch)
  }
  // console.log(boardcount?.fetchBoardsCount / 10)
  //!뮤테이션은 어싱크어웨이트 써야함. 쿼리는 보통 옵셔널체에닝을 쓴다

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
      InputSearch={InputSearch}
      onClickSearch={onClickSearch}
    />
  )
  // {
  //      data: data, // 서버에서 받은 객체
  //      aaa: aaavvvvvv, // 문자열
  //      bbb: bbbqqqqqq, // 직접만든 객체
  // }
}

export default Query
