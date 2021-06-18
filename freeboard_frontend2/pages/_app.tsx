import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'

import GlobalStyles from '../src/commons/styles/globalStyles'

import Layout from '../src/components/commons/layout'

import {createUploadLink} from 'apollo-upload-client'

import {config} from '@fortawesome/fontawesome-svg-core'
// import {useState} from 'react'

import {createContext, useState} from 'react'
//!토큰설정3 createContext 추가/ 리액트 기능.

import {onError} from '@apollo/client/link/error'
import axios from 'axios'
import {ForwardRounded} from '@material-ui/icons'
//!리프레시토큰 설정2

export const LayoutContext = createContext({
  accessToken: '',
  setAccessToken: (__) => {},
  setUserInfo: (_: string) => {},
  userInfo: {},
})
//!로긴 토큰 설정4/ 레이아웃 감싸기 위해 LayoutContext 선언. 안에 아까 state선언한 accessToken 넣기.
//!로긴설정6 / 사용할 곳에서 export 넣기!
//!로긴설정7 / 빨간줄 없애기 ->  setAccessToken:(__)=>{}
//!유저정보받기 2/  setUserInfo: (_:string)=> {}, 이거 레이아웃에 넣기 위해 추가.

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = ({Component, pageProps}) => {
  const [accessToken, setAccessToken] = useState('')
  //!로긴 토큰 설정 1/ 스테이트선언.

  const [userInfo, setUserInfo] = useState({})
  //!유저정보받기 1/  스테이트 선언. 객체 형태임. 이유는 지켜보자

  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    // credentials: 'include', //!리프레시토큰 설정1
  })
  //! 로긴설정2/  header~ 부분 작성

  // // @ts-ignore
  // const errorLink = onError(async ({graphQLErrors, operation, forward}) => {
  //   //!아폴로 docs 내용 바탕임.// 에러가 들어로면 graphQLErrors요걸로 받는다고 함.
  //   //!만료된 토큰 재발급 받기/
  //   if (graphQLErrors) {
  //     //!리프레시토큰 설정3/
  //     for (let err of graphQLErrors) {
  //       if (err.extensions.code === 'UNAUTHENTICATED') {
  //         //!만료된 토큰 재발급 받기/
  //         const response = await axios.post(
  //           'http://localhost:3000/graphgql',
  //           {
  //             query: `
  //               mutation restoreAccessToken {
  //                 restoreAccessToken{
  //                   accessToken
  //                 }}
  //               `,
  //           },
  //           {
  //             headers: {'Content-Type': 'application/json'},
  //             withCredentials: true,
  //           }
  //         )
  //         const newAccessToken =
  //           response.data.data.restoreAccessToken.accessToken
  //         setAccessToken(newAccessToken)

  //         //!재발급 받은 토큰으로 실패했던 쿼리 다시 날리기.
  //         operation.setContext({
  //           headers: {
  //             ...operation.getContext().headers,
  //             authorization: `Baerer ${newAccessToken}`,
  //           },
  //         })
  //         return forward(operation)
  //       }
  //     }
  //   }
  // })

  const aaa = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    //uploadLink만 있어도 되나 추후 주소 합치기 위해 .from미리 기재
    cache: new InMemoryCache(),
    // link: ApolloLink.from([createUploadLink as unknown as ApolloLink]),
    //!아폴로 클라이언트로 통신기능 사용됨
    //! cache가 아폴로의 스테이트 데이터 저장 용도
  })

  return (
    //!로긴설정5/ 4번에서 만든 거 레이아웃 적용. 벨류 안에 {}로 한번 더 감싸기.
    //!유저정보받기3/ value에 넣어 전역에 적용되도록.
    <LayoutContext.Provider
      value={{accessToken, setAccessToken, userInfo, setUserInfo}}
    >
      <ApolloProvider client={aaa}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </LayoutContext.Provider>
  )
}

export default App
