import {useRouter} from  "next/router"



export default function QuaryDetailPage(){
    
    const router = useRouter()

    
    console.log(router.query)
    
    
    return(
        <div>넘버상세보기 페이지입니다.</div>
    ) 
}