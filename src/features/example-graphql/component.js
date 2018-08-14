import React from 'react';
import PropTypes from 'prop-types';

import {
  BackButton, CountryItem, CountryList, ExampleRoot, ExampleTitle,
} from './component.styled';


const ExampleGraphql = (props) => (
  <ExampleRoot>
    <ExampleTitle>
      Data fetching example
    </ExampleTitle>
    <CountryList>
      {props.countries.map(({ id, name }) => (
        <CountryItem key={id}>
          {name}
        </CountryItem>
      ))}
    </CountryList>
    <BackButton to='/'>
      Back
    </BackButton>
  </ExampleRoot>
);

ExampleGraphql.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default ExampleGraphql;
