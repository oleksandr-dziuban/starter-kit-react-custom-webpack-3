import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TIME_INTERVAL } from './constants';
import homeLogo from '../../styles/icons/starter-kit.svg';
import styles from './component.scss';


class ExampleRedux extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.showTime(this.currentDate);
    }, TIME_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  get currentDate() {
    return ((new Date().toString()).match(/\d+:\d+:\d+/i) || [''])[0];
  }

  render() {
    return (
      <Fragment>
        <img
          alt='Starter Kit Icon'
          className={styles.logo}
          src={homeLogo}
        />
        <section className={styles.message}>
          <p className={styles.title}>
            You are ready to build an application.
            <br />
            Current time is { this.props.date }
          </p>
          <p className={styles.link}>
            <Link to='/example-graphql'>
              Click here
            </Link> to check Router and Data fetching
          </p>
        </section>
      </Fragment>
    );
  }
}

ExampleRedux.propTypes = {
  date: PropTypes.string.isRequired,
  showTime: PropTypes.func.isRequired,
};

export default ExampleRedux;


