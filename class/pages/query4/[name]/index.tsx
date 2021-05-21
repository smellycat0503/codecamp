// 백 데이터 쿼리 읽기,   useQuery, gql.
// 프론트 주소 조회 -> router

//!시작
import {gql, useQuery} from '@apollo/client';
import {useRouter} from 'next/router';

const nameIndex = () => {
  const router = useRouter();

  console.log(router);

  //!여기서 variable 뒤에 경로 찾으러면 Gql 선언한 LEGO를 콘솔로그 해서 찾아야하나.-> 맞음
  const LEGO = gql`
    query ZZZ($name: String) {
      fetchProfile(name: $name) {
        name
        age
        school
      }
    }
  `;

  console.log(router);
  //*얘는 조회하는게 맞는지. 얘로는 뭘 알기 힘듦.

  const {data} = useQuery(LEGO, {variables: {name: router.query.name}});
  // useLazyQuery()
  //! useMutation 때는 선언 부분에 [], useQuery때 {}를 쓰는 이유 알아보기.-> 기억을 하는거임 약속임.
  //!여기 베리어블스의 경로 파악하는 법 다시 물어보기. 라우터그냥 router.query는 약속인건가.
  //! useMutation() 에서는 () 안에 gql만 넣음.  여기서는 전 페이지에서 입력한 데이터값을 읽어야함!!
  //!
  // console.log(data)

  return (
    <div>
      {/* <div>이름:{data && data.fetchProfile.name}</div> */}
      {/* <div>나이:{data && data.fetchProfile.age}</div> */}
      {/* <div>학교:{data === undefined ? '' : data.fetchProfile.school}</div> */}
    </div>
  );
};

export default nameIndex;

//!끝

//해야할것 1. 유즈쿼리 2. 주소 받기 위한 라우터 사용.

// import {gql, useQuery} from '@apollo/client'
// import {useRouter} from 'next/router'

//   const nameIndex = () => {

//     const LEGO = gql`
//     query ZZZ($name: String){
//       fetchProfile(name: $name  ){
//         name
//         age
//         school
//       }}
//     `

//     const router = useRouter()

//     const {data} = useQuery(LEGO, {variables:{name:router.query.name}})

//     console.log(data)

//     return(
//       <div>
//         <div>이름:{data && data.fetchProfile.name}</div>
//         <div>나이:{!data ? '' : data.fetchProfile.age}</div>
//         <div>학교:{data === undefined ? '' : data.fetchProfile.school}</div>
//       </div>
//     )
//   }
//   export default nameIndex
