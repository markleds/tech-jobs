import React, { Component } from 'react';

import SplashHeader from './SplashHeader';
import SplashActionsCreate from './SplashActionsCreate';
import CreateAccountForm from './CreateAccountForm';

class Splash2CreateAccount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper-2">
        <div className="splash-container">
          <SplashHeader />
          <SplashActionsCreate />
          <CreateAccountForm />
        </div>
      </div>
    );
  }
}

export default Splash2CreateAccount;
