import {Router} from '@material-ui/icons'
import {useRouter} from 'next/router'
import {createContext, useContext, useEffect} from 'react'
import {LayoutContext} from '../../../../pages/_app'
import getAccessToken from '../../../commons/libraries/getAccessToken'

const withAuth = (Component) => {
  //컴포넌트
  return function TokenCheck(props) {
    //props

    const router = useRouter()
    const {accessToken, setAccessToken} = useContext(LayoutContext)

    //토큰체크
    useEffect(() => {
      // if (accessToken) return
      //*refreshToken으로 accessToken 재발급 받기
      const restoreAccessToken = async () => {
        const newAccessToken = await getAccessToken({setAccessToken})
        if (!newAccessToken) router.push(`board/login`)
      }
      //?함수 실행시키기 위함
      restoreAccessToken()

      //*그래도 없으면 로긴화면으로 돌려보내기
      // if (!accessToken) {
      //   router.push(`/board/login/`)
      // }
    }, [])

    if (!accessToken) return <></>

    return <Component {...props} /> //컴포넌트 리턴
    //! {...props}형태는 이미 한번 다른컴포넌트를 거쳐서 오므로 중괄호가 없을 시 객체안에 객체가 들어가게 된다.
  }
}

export default withAuth

// const Container = (props) => {

//     const props

//     return <Presenter props={props} />

//   }

//             const props = {
//               props: props
//             }

//             const props = {
//               aaa: 3,
//               bbb: 'qwer'
//             }

//             {...props} ==>  {aaa: 3, bbb: 'qweryt'}

//   const Presenter = ({aaa, bbb}) => {
//     props.aaa
//   }
