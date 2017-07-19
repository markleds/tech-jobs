import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

import Endpoint from "../constants/endpoint";

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .post(`${Endpoint.BASE_URL}/users/`, {
      user:this.state
    })
    .then(() => {
      browserHistory.push('/login');
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
              first_name
            </div>
            <span><input onChange={this.handleChange} name="first_name" type="text" required /></span>
          </div>
          <div>
            <div className="label">
              last_name
            </div>
            <span><input onChange={this.handleChange} name="last_name" type="text" required /></span>
          </div>
          <div>
            <div className="label">
              email
            </div>
            <span><input onChange={this.handleChange} name="email" type="email" placeholder="@" required /></span>
          </div>
          <div>
            <div className="label">
              password
            </div>
            <span><input onChange={this.handleChange} name="password" type="password" required /></span>
          </div>
          <div>
            <button className="hvr-underline-from-center">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
