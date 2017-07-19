import React, { Component } from 'react';
import { Link } from 'react-router';

class SplashHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">
        <div className="logo-container">
        </div>
        </Link>
        <div className="welcome-text">
          start your search<span className="blinking-cursor">|</span>
        </div>
      </div>
    );
  }
}

export default SplashHeader;
