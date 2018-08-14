import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import homeLogo from '../../styles/icons/starter-kit.svg';

import {
  HomeLogo,
  HomeMessage,
  HomeTitle,
  HomeRouterLink,
} from './Home.styled';

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeLogo
          alt='Starter Kit Icon'
          src={homeLogo}
        />
        <HomeMessage>
          <HomeTitle>
            You are ready to build an application
          </HomeTitle>
          <HomeRouterLink>
            <Link to='/page-example'>
              Click here
            </Link> to check Router and Data fetching
          </HomeRouterLink>
        </HomeMessage>
      </Fragment>
    );
  }
}

export default Home;
