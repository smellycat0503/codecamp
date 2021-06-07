import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'
import Global from '../src/commons/styles/globalStyles'
import {createUploadLink} from 'apollo-upload-client'

import {config} from '@fortawesome/fontawesome-svg-core'
import {useState} from 'react'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// const App = ({Component, pageProps}) => {
//   const aaa = new ApolloClient({
//     uri: 'http://backend.codebootcamp.co.kr/graphql',
//     cache: new InMemoryCache(),
//   })
function MyApp({Component, pageProps}) {
  const [accessToken, setAccessToken] = useState('')

  const uploadLink = createUploadLink({
    uri: 'http://backend.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  })

  const [asd, setAsd] = useState('')

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
