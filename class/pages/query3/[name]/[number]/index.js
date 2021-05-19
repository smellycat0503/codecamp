import {useRouter} from "next/router"
import {useQuery, gql} from "@apollo/client"
//0.playground에서 프로필 조회하기-> query
//1-1. 라우터 활용.
//1-2. 조회를 위해 Query,gql 활용.

export default function QueryProfile(){


    // 2.라우터 선언 할당.
    const router = useRouter()

    // 3.gql 데이터 값 불러오기.
    // 처음 gql 조회했을떄는 아래와 같았음.
    // query{fetchProfile(name:"둘리")
    //     {
    //       name
    //       age
    //       school
    //     }
    //   }
    // query 뒤에 이름 하나가 추가되고(왜?), (name:"둘리") 대신에 ($iori:String)가 들어감.
    // iori는 나중에 usequery에서 이름 조회할 때 사용됨.
    // 
    
    const KOF = gql`
            query kyo ($iori:String){
                fetchProfile(name:$iori)
                {
                name
                age
                school
                }
            }
            `
    
// 4.데이터 조회를 위한 useQuery 활용.
// 여기서 변수 선언할 떄는 왜 {}중괄호를 쓰는걸까.그냥 약속인가.
// useQuery() 괄호 안에 불러올 데이터 넣기
// useQuery(sonic, {variable:{mario:router.query.name}})
// 쿼리로 이름 name 조회하기-> gql이 할당된 소닉이 있고, 베리어블키에 마리오키의 값이 라우터.쿼리.네임?
// -> iori의 위치를 파악하는 법이 이해가 어려움. 왜 라우터 안에 쿼리 안에 이름이 있는거지.
// 앞페이지에서의 라우터와 역할이 다른듯. 따로 라우터객체로 사용된 것이 아닌 조회를 위한 용도인가? 
// const{} = useQuery()의 활용법 파악하기!
// iori 끝에 name만 넣는 이유는 조회의 조건이 이름이 되기 때문인가?
    const {singo} = useQuery(KOF, {variable:{iori:router.query.name}
    })

    // 5.삼항연산자 사용하여, 데이터 있을떄와 없을 때의 조건을 만들어 활용.
    // 조회useQuery를 할당한 
    return(
        <div>
            <div>이름:{singo && singo.fetchProfile.name}</div>
            <div>나이:{singo === undefined ? '' : singo.fetchProfile.age}</div>
            <div>학교:{!singo ? '' : singo.fetchProfile.school}</div>
        </div>
    )
}