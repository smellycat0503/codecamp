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
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = ({Component, pageProps}) => {
  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
  })

  const aaa = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    //uploadLink만 있어도 되나 추후 주소 합치기 위해 .from미리 기재
    cache: new InMemoryCache(),
    // link: ApolloLink.from([createUploadLink as unknown as ApolloLink]),
    //!아폴로 클라이언트로 통신기능 사용됨
    //! cache가 아폴로의 스테이트 데이터 저장 용도
  })

  return (
    <ApolloProvider client={aaa}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App
