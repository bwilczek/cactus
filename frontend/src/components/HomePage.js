import React, { Component } from 'react';
import { connect } from 'react-redux'

import Navigation from './Navigation'
import * as counterActions from '../actions/counter'
import * as authActions from '../actions/auth'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        Counter {this.props.value} <br />
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <br />
        Token: {this.props.token} <br />
        <button onClick={this.props.fetchToken}>fetch</button>
      </div>
    );
  }
}


export default connect(
  (state) => {
    return {
      value: state.counter.value,
      token: state.auth.token
    }
  },
  (dispatch) => {
    return {
      increment: () => {
        dispatch(counterActions.increment())
      },
      decrement: () => {
        dispatch(counterActions.decrement())
      },
      fetchToken: () => {
        dispatch(authActions.fetchToken())
      }
    }
  }
)(HomePage);
