import ApolloClient, { InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { setContext } from 'apollo-link-context';


// Transport URI
const uri = process.env.REACT_APP_GRAPHQL_ENDPOINT;

// Configure options
const middleware = (request, previousContext) => ({
  headers: {
    ...previousContext.headers,
  },
});

// Configure transport
const link = ApolloLink.from([
  new setContext(middleware),
  new HttpLink({ uri }),
]);

// Configure cache
const cache = new InMemoryCache();

// Configure client
const client = new ApolloClient({
  link,
  cache: cache.restore(window.__APOLLO_STATE__ || {}),
});

export default client;
