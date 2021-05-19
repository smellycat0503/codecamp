import { gql, useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

export default function RegistProfile(){

    const router = useRouter()
    console.log(router) 

    const green = gql`
            query ZEEP ($lion: String) {
                fetchProfile(name: $lion){
                name
                age
                school                
                }           
            }    
    `
    console.log(green)

    const {data} = useQuery(green, {variables:{lion:router.query.name}})

    console.log(data)

    return(
        <div>
            <div>
            이름:{data && data.fetchProfile.name}
            </div>
            <div>
            나이:{!data ? '' : data.fetchProfile.age}
            </div>
            <div>
            학교:{data === undefined ? '' : data.fetchProfile.school}
            </div>

        </div>
     
     
    )
}