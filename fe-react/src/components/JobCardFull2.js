import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

import Endpoint from "../constants/endpoint";

import LoggedInHeader2 from './LoggedInHeader2';
import Footer2 from './Footer2';

class JobCardFull2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {},
      job_id: 0,
      api_id: "",
      api_job_id: ""
    };
  }

  componentDidMount() {
    axios
    .get(`${Endpoint.BASE_URL}/jobs/${this.props.params.job_id}`,{
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const jobData = response.data;
      this.setState({
        job: jobData,
        job_id: jobData.id,
        api_id: jobData.api_id,
        api_job_id: jobData.api_job_id
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .post(`${Endpoint.BASE_URL}/journals/`, {
      journal:this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
        'user_id': window.localStorage.user_id
      }
    })
    .then((response) => {
      const journalData = response.data;
      browserHistory.push(`/journals/${journalData.id}/edit`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  formatImageUrl() {
    return this.state.job.company_logo.replace(/http/, "https");
  }

  renderCompanyLogo() {
    if(this.state.job.api_num) {
      return (
        <img className="company-logo-full" src={this.formatImageUrl()}/>

      );
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="main-wrapper">
        <LoggedInHeader2 />

        <div className="main-container">
          <div className="job-full-conatiner">
          {this.renderCompanyLogo()}
            <h2>{this.state.job.title}</h2>
            <h2>at {this.state.job.company_name}</h2>
            <div className="save-job-button-2">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <button className="hvr-underline-from-center save-button">save & apply</button>
              </form>
            </div>
            <div className="align-center">
              {this.state.job.location}
            </div>
            <div className="align-center">
              {this.state.job.job_type}
            </div>
            <div dangerouslySetInnerHTML={{__html: this.state.job.description}}/>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default JobCardFull2;
