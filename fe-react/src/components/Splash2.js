import React, { Component } from 'react';

import SplashHeader from './SplashHeader';
import SplashActions from './SplashActions';

class Splash2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-wrapper-2">
        <div className="splash-container">
          <SplashHeader />
          <SplashActions />
        </div>
      </div>
    );
  }
}

export default Splash2;
