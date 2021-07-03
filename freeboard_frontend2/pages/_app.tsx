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
import {createContext, useEffect, useState} from 'react'
import {onError} from '@apollo/client/link/error'

import getAccessToken from '../src/commons/libraries/getAccessToken'
import {useRouter} from 'next/router'

export const LayoutContext: any = createContext({
  accessToken: '',
  setAccessToken: (__) => {},
  setUserInfo: (_: string) => {},
  userInfo: {},
})

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = ({Component, pageProps}) => {
  const router = useRouter()
  const [accessToken, setAccessToken] = useState('')

  const [userInfo, setUserInfo] = useState({})

  const uploadLink = createUploadLink({
    uri: 'https://backend.codebootcamp.co.kr/graphql',
    headers: {
      //* ||''는 undefined를 토큰으로 받지 않게 하기 위한 수단
      authorization: `Bearer ${accessToken || ''}`,
    },
    credentials: 'include',
  })

  // @ts-ignore
  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          //* 만료된 토큰 재발급 받기
          //* 리프레시토큰/ 복잡해서 axios부분(getAccessToken)을 src/commons/libraries/로 빼기로 함. 안빼도 상관은 없음

          //*재발급 받은 토큰으로 실패했던 쿼리 다시 날리기.
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Baerer ${getAccessToken({setAccessToken}) || ''}`,
            },
          })
          return forward(operation)
        }
      }
    }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    //* uploadLink만 있어도 되나 추후 주소 합치기 위해 .from미리 기재
    //* errorlink가 accessToken 만료 시 재발급 받기까지의 과정임 둘이 합쳐져서 client로 가게 됨
    cache: new InMemoryCache(),

    //* cache가 아폴로의 스테이트 데이터 저장 용도
  })

  useEffect(() => {
    // accessToken없고, refreshToken 없을때
    if (!accessToken && !localStorage.getItem('refreshToken')) return

    // accessToken있고,  refreshToken이 있을때
    if (accessToken && !localStorage.getItem('refreshToken')) return

    // accessToken없고, refreshToken 있을때
    //*refreshToken으로 accessToken 재발급 받기
    // const restoreAccessToken = async () => {
    // const newAccessToken = await getAccessToken({setAccessToken})
    // if (!newAccessToken) router.push(`board/login`)
    // }
    //?함수 실행시키기 위함
    // restoreAccessToken()
  }, [])

  return (
    <>
      <LayoutContext.Provider
        value={{accessToken, setAccessToken, userInfo, setUserInfo}}
      >
        <ApolloProvider client={client}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </LayoutContext.Provider>
    </>
  )
}

export default App
