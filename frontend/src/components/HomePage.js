import React, { Component } from 'react';
import { connect } from 'react-redux'

import Navigation from './Navigation'
import * as counterActions from '../actions/counter'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        Home {this.props.value}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}


export default connect(
  (state) => {
    return {
      value: state.counter.value
    }
  },
  (dispatch) => {
    return {
      increment: () => {
        dispatch(counterActions.increment())
      },
      decrement: () => {
        dispatch(counterActions.decrement())
      }
    }
  }
)(HomePage);
