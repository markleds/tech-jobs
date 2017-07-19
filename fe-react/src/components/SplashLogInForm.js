import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

import Endpoint from "../constants/endpoint";

class SplashLogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .post(`${Endpoint.BASE_URL}/users/login`, {
      user:this.state
    })
    .then((response) => {
      const data = response.data;

      window.localStorage.setItem('token', data.token);
      browserHistory.push('/journal');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    return (
      <div className="entry-container-2">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <div className="label">
            email
            </div>
            <span><input onChange={this.handleChange} name="email" type="text" placeholder="@" required /></span>
          </div>
          <div>
            <div className="label">
              password
            </div>
            <span><input onChange={this.handleChange} name="password" type="password" required /></span>
          </div>
          <div>
            <button type="submit" className="hvr-underline-from-center">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SplashLogInForm;
