import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

class LoggedInNav2 extends Component {
  constructor(props) {
    super(props);

  }

  handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('token');
    browserHistory.push('/');
  }

  render() {
    return(
        <div className="nav-2">
          <Link to="/journal" className="hvr-underline-from-center" title="journal">journal</Link>
          <Link onClick={() => this.props.displaySearch()} className="hvr-underline-from-center" title="search">search</Link>
          <Link to="#" onClick={this.handleLogout.bind(this)} className="hvr-underline-from-center" title="log out">log out</Link>
        </div>
    );
  }
}

export default LoggedInNav2;
