// import {Reply__List__Wrapper} from './ItemComment.styled'
import {useRouter} from 'next/router'
import 
//*댓글 목록/ 맵, 인피니트스크롤 적용 페이지
const Reply__List = ({data}) => {
  const router = useRouter()

  return (
    <>
      {/* <Reply__List__Wrapper> */}
      <div>{data.user.name}</div>
      {/* </Reply__List__Wrapper> */}
    </>
  )
}

export default Reply__List
