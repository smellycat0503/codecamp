import {useRouter} from  "next/router"
import {useQuery, gql} from '@apollo/client'


export default function QuaryDetailPage(){
    
    const router = useRouter()

    const aaa = gql`
    query zzz ($aaa: String){
            fetchProfile(name: $aaa){
                number
                name
                age
                school
            }
        }
    
    `

    const { data } = useQuery(aaa, {
        variables:{
            aaa:router.query.name   
        }
    })

    // const onClickRouting = () => {

    //     // router.push('/query/훈이')
    // }

    // console.log('data',data.fetchProfile.name)
    
    //삼항연산자=>이프냐 엘스냐 둘중 하나일 경우만 사용.
    return(
        <div>
            <div>
               이름:{!data ? '' : data.fetchProfile.name }
               {/* data앞에!가 들어가므로 data가 없을 때 '', 있을때 : 오른쪽이 적용 */}
            </div>
            <div>
                나이:{data === undefined ? '' : data.fetchProfile.age}
                
            </div>
            <div>
                학교:{data && data.fetchProfile.school}
                {/* data가 true면 (있으면)&&뒤가 실행됨. false면 &&뒤가 실행 안됨 */}
            </div>
        </div>
    ) 
}