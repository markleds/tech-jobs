import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="footer-wrapper-2">
        <div className="header-container">
          <div className="api-footer-logos">
            <img src={require('../assets/img/git-hub-white.png')} className="p1-button-img" />
            <img src={require('../assets/img/authenticjobs-light.png')} className="p1-button-img" />
          </div>
          <div className="credit-container">
            <Link to="http://markledbetterdesigns.com" target="_blank" className="hvr-underline-from-center">&copy; Mark Ledbetter</Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer2;
