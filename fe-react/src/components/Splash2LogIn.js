import React, { Component } from 'react';

import SplashHeader from './SplashHeader';
import SplashActionsLogIn from './SplashActionsLogIn';
import SplashLogInForm from './SplashLogInForm';

class Splash2LogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper-2">
        <div className="splash-container">
          <SplashHeader />
          <SplashActionsLogIn />
          <SplashLogInForm />
        </div>
      </div>
    );
  }
}

export default Splash2LogIn;
