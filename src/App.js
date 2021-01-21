import {ApolloProvider,ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Topics from './Topics'

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri:'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Topics />  
    </ApolloProvider>
  );
}

export default App;
