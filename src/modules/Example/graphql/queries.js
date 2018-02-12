import gql from 'graphql-tag';

export const allFilmsQuery = gql`query {
  countries {
    edges {
      node {
        id
        name
      }
    }
  }
}
`;
