import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'
import Global from '../src/commons/styles/globalStyles'
import {createUploadLink} from 'apollo-upload-client'

import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// const App = ({Component, pageProps}) => {
//   const aaa = new ApolloClient({
//     uri: 'http://backend.codebootcamp.co.kr/graphql',
//     cache: new InMemoryCache(),
//   })
function MyApp({Component, pageProps}) {
  const uploadLink = createUploadLink({
    uri: 'http://example.codebootcamp.co.kr/graphql',
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
