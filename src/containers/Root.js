import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import configureStore from '../store/configureStore';
import Home from './Home';
import i18n from '../i18n';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </I18nextProvider>
      </Provider>
    );
  }
};
