import React, { Component } from 'react';
import { Link } from 'react-router';

class SplashActionsLogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="enter-action-container">
          <Link to="/create-account" className="hvr-underline-from-center">create account</Link>
          <Link to="login" className="hvr-underline-from-center splash-nav-active">log in</Link>
        </div>
      </div>
    );
  }
}

export default SplashActionsLogIn;
