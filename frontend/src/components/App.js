import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from '../store'

import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'
import HomePage from './HomePage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sign_in" component={SignInPage} />
            <Route path="/sign_up" component={SignUpPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
