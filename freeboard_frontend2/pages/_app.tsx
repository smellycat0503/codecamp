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
  const aaa = new ApolloClient({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
    // link: ApolloLink.from([createUploadLink as unknown as ApolloLink]),
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
