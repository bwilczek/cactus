import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        Home
      </div>
    );
  }
}

export default HomePage;
