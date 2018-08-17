import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './component.scss';


const ExampleGraphql = (props) => (
  <main className={styles.root}>
    <p className={styles.title}>
      Data fetching example
    </p>
    <ul className={styles.list}>
      {props.countries.map(({ id, name }) => (
        <li
          className={styles.item}
          key={id}
        >
          {name}
        </li>
      ))}
    </ul>
    <Link
      className={styles.backBtn}
      to='/'
    >
      Back
    </Link>
  </main>
);

ExampleGraphql.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default ExampleGraphql;
