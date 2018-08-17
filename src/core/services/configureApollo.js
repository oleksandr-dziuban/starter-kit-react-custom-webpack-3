import ApolloClient, { InMemoryCache } from 'apollo-boost';


// Transport URI
const uri = process.env.REACT_APP_GRAPHQL_ENDPOINT;

// Configure cache
const cache = new InMemoryCache();

// Configure client
const client = new ApolloClient({
  uri,
  cache: cache.restore(window.__APOLLO_STATE__ || {}),
});

export default client;
