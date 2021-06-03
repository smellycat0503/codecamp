import BoardListPresenter from './BoardList.presenter'
import {gql, useQuery} from '@apollo/client'
import {raison} from './BoardList.queries'
import {useState} from 'react'
import {LineWrapper, Checkbox1, Number, Title, Date} from './BoardList.styles'

const BoardListContainer = () => {
  //필요한 기능 목록.
  //1.라우터 사용하여 주소 가져오기.
  //2. gql 데이터값 불러오기.
  //3. 데이터 조회를 위한 useQuery 사용.
  //4. useState로 데이터 묶기.=> 조회할때는 묶을 필요가 없네?
  //클릭해서 주소를 가져와야 하는 경우가 아니므로 사용을 안하는게 맞나
  // const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const {data} = useQuery(raison, {
    variables: {page: currentPage},
  })
  // 여기는 특정 값을 조회하는 것이 아닌 게시판 모든 내용을 찾아야 하므로
  //

  // const onClickPage = (page) => {
  //   setCurrentPage(page)
  // }
  console.log(data)
  //* 이 단계에서는 객체들이 아직 fetchBoard에 있음
  //* 이후의 키에 들어갈 때마다 data뒤에 ?를 넣어야함.
  //* =옵셔널체이닝->데이타가 있을 경우 가져오고 없을 경우에는 아무 행동도 하지 않는다.

  console.log(data?.fetchBoards)

  // let a= data.fetchBoards.slice(-6)

  // const data2 = data?.fetchBoards.map((data) => {
  //         <LineWrapper>
  //             <Checkbox1 type = "checkbox"></Checkbox1>
  //             <Number>{data.fetchBoards.number}</Number>
  //             <Title>{data.fetchBoards.title}</Title>
  //             <Date>{data.fetchBoards.createdAt}</Date>
  //         </LineWrapper>
  //         })

  const onClickPage = (e) => {
    let a = e.target.id
    setCurrentPage(a)
  }

  //!무한스크롤러 무작정 따라해보자

  return (
    <BoardListPresenter
      data={data}
      onClickPage={onClickPage}
      currentPage={currentPage}
    />
    //! a={data} 에서 a를 프레젠터로 넘기는 것. 이때 한번 더 객채화가 되는건가?
  )
}

export default BoardListContainer
