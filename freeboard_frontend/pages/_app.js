import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = ({ Component, pageProps }) => {
  const aaa = new ApolloClient({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={aaa}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
