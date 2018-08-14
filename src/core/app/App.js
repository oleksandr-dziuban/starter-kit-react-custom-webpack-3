import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import client from '../services/configureApollo';
import configureStore from '../services/configureStore';

import ExampleRedux from '../../features/example-redux';
import ExampleGraphql from '../../features/example-graphql';
import { AppRoot } from './App.styled';

import '../../styles/normalize.css';
import '../../styles/typography.css';


const store = configureStore();

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <AppRoot>
              <Switch>
                <Route
                  component={ExampleRedux}
                  exact
                  path='/example-redux'
                />
                <Route
                  component={ExampleGraphql}
                  path='/example-graphql'
                />
                <Redirect
                  from='/'
                  to='/example-redux'
                />
              </Switch>
            </AppRoot>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
