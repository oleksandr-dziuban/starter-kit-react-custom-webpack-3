import { compose } from 'redux';
import { graphql } from 'react-apollo';

import ExampleGraphql from './component';
import allCountriesQueryConfig from './graphql/config';
import allCountriesQuery from './graphql/allCountries.graphql';


export default compose(
  graphql(allCountriesQuery, allCountriesQueryConfig),
)(ExampleGraphql);
