
import {useQuery, gql} from "@apollo/client"
import {useRouter} from "next/router"
import QueryUI from "../detail/QueryDetail.presenter"
import {Sonic} from "./QueryDetail.queries"


const QueryDetail = () => {

    // 2.라우터 선언 할당.
    const router = useRouter()
    //주소의 이름을 빼기위한 용도.
    

    // 3.gql 데이터 값 불러오기.
    // 여기 aaa가 헷갈리네.
    // const sonic = gql`
    // query eggman ($mario: String){
    //         fetchProfile(name: $mario){
    //             name
    //             age
    //             school
    //         }
    //     }
    
    // `
    //4.데이터 조회를 위한 useQuery 활용.
    //여기서 변수 선언할 떄는 왜 {}중괄호를 쓰는걸까.그냥 약속인가.
    //useQuery() 괄호 안에 불러올 데이터 넣기
    //useQuery(sonic, {variable:{mario:router.query.name}})
    //쿼리로 이름 name 조회하기-> gql이 할당된 소닉이 있고, 베리어블키에 마리오키의 값이 라우터.쿼리.네임?
    //-> 마리오의 위치를 파악하는 법이 이해가 어려움. 왜 라우터 안에 쿼리 안에 이름이 있는거지.
    //앞페이지에서의 라우터와 역할이 다른듯. 따로 라우터객체로 사용된 것이 아닌 조회를 위한 용도인가? 
    // const{} = useQuery()의 활용법 파악하기!

    // export const Sonic = gql`
    // query eggman ($mario: String){
    //         fetchProfile(name: $mario){
    //             name
    //             age
    //             school
    //         }
    //     }
    
    // `
    //console.log(router) 까지만 조회해보고 찾아보기.

    const { data } = useQuery(Sonic, {
        variables:{
            mario:router.query.name
        }
    })

    // const {data} = useQuery(a,b)
    //a = gql 할당했던것
    //b = a를 실행할건데 a에 넣을 것.값.



//소닉이 인자로 들어가고, 
//Const {} = useQuery(a,b) -> a,b 인자. b가 객채니까 저런 형태.()괄호 안은 함수가 작용됨. 

    console.log(data)//데이터 목록 확인해보기.
    
       //5.삼항연산자=>이프냐 엘스냐 둘중 하나일 경우만 사용.


    return (
        <QueryUI data={data} />

    )
}

export default QueryDetail