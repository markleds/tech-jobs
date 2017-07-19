import React, { Component } from 'react';
import { Link } from 'react-router';

import LoggedInNav2 from './LoggedInNav2';
import SearchBar2 from './SearchBar2';

class LoggedInHeader2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navDisplayed: false
    }
  }

  displaySearch() {
    this.setState({navDisplayed: !this.state.navDisplayed});
  }

  render() {
    return(
      <div>
        <div className="header-wrapper-2">
          <div className="header-container">
            <div className="nav-container">
              <LoggedInNav2 displaySearch={this.displaySearch.bind(this)} />
              </div>
            <Link to="/journal"><div className="logo-container-logged-in">
              <div className="cursor-new"><span className="blinking-cursor">|</span></div>
            </div></Link>
          </div>
        </div>
        {
          this.state.navDisplayed
            ? <SearchBar2 />
            : null
        }
      </div>
    );
  }
}

export default LoggedInHeader2;
