import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to='/sign_in'>Sign in</Link> |&nbsp;
        <Link to='/sign_up'>Sign up</Link> |&nbsp;
        <Link to='/'>Home</Link>
        <hr />
      </div>
    );
  }
}

export default Navigation;
