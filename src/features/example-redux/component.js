import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import homeLogo from '../../styles/icons/starter-kit.svg';
import { TIME_INTERVAL } from './constants';
import { HomeLogo, HomeMessage, HomeTitle, HomeRouterLink } from './component.styled';


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
        <HomeLogo
          alt='Starter Kit Icon'
          src={homeLogo}
        />
        <HomeMessage>
          <HomeTitle>
            You are ready to build an application.
            <br />
            Current time is { this.props.date }
          </HomeTitle>
          <HomeRouterLink>
            <Link to='/example-graphql'>
              Click here
            </Link> to check Router and Data fetching
          </HomeRouterLink>
        </HomeMessage>
      </Fragment>
    );
  }
}

ExampleRedux.propTypes = {
  date: PropTypes.string.isRequired,
  showTime: PropTypes.func.isRequired,
};

export default ExampleRedux;


