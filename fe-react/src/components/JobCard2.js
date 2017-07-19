import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

import Endpoint from "../constants/endpoint";

class JobCard2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_id: `${this.props.job.api_id}`,
      api_num: `${this.props.job.api_num}`,
      api_job_id: `${this.props.job.api_job_id}`,
      api_logo: `${this.props.job.api_logo}`,
      apply_url: `${this.props.job.apply_url}`,
      company_logo: `${this.props.job.company_logo}`,
      has_company_logo: `${this.props.job.has_company_logo}`,
      company_name: `${this.props.job.company_name}`,
      company_url: `${this.props.job.company_url}`,
      date_created:  `${this.props.job.date_created}`,
      description: `${this.props.job.description}`,
      job_type: `${this.props.job.job_type}`,
      location: `${this.props.job.location}`,
      title: `${this.props.job.title}`
    };

  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    axios
    .post(`${Endpoint.BASE_URL}/jobs`, {
      job:this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const jobData = response.data;
      browserHistory.push(`/jobs/${jobData.id}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="jc-container-2 animated bounceInUp">
        <img className="jc-company-logo-thumb" src={this.props.job.company_logo} />
        <h2>{this.props.job.title}</h2>
        <h2>at  {this.props.job.company_name}</h2>
        <h3>
          {this.props.job.location}<br/>
          {this.props.job.job_type}
        </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button className="icon-button view-button"/>
        </form>
      </div>
    );
  }
}

export default JobCard2;
