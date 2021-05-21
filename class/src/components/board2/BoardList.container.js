import BoardListPresenter from './BoardList.presenter';
import {gql, useQuery} from '@apollo/client';
import {raison} from './BoardList.queries';

const BoardListContainer = () => {
  //필요한 기능 목록.
  //1.라우터 사용하여 주소 가져오기.
  //2. gql 데이터값 불러오기.
  //3. 데이터 조회를 위한 useQuery 사용.
  //4. useState로 데이터 묶기.=> 조회할때는 묶을 필요가 없네?
  //클릭해서 주소를 가져와야 하는 경우가 아니므로 사용을 안하는게 맞나
  // const router = useRouter()

  const {data} = useQuery(raison);
  // 여기는 특정 값을 조회하는 것이 아닌 게시판 모든 내용을 찾아야 하므로
  //

  console.log(data);

  // let a= data.fetchBoard.slice(-6)

  // const list = a.map((data) => {
  //         <LineWrapper>
  //             <Checkbox1 type = "checkbox"></Checkbox1>
  //             <Number>{data.fetchBoard.number}</Number>
  //             <Title>{data.fetchBoard.title}</Title>
  //             <Date>{data.fetchBoard.createdAt}</Date>
  //         </LineWrapper>})

  return <BoardListPresenter data={data} />;
};

export default BoardListContainer;
