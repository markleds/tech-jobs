import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router';

import Endpoint from "../constants/endpoint";

import LoggedInHeader2 from './LoggedInHeader2';
import JobCard2 from './JobCard2';
import Footer2 from './Footer2';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      keyword: `${this.props.location.query.keyword}`,
      location: `${this.props.location.query.location}`
    };
  }

  componentDidMount() {
    axios
    .get(`${Endpoint.BASE_URL}/api/jobs/${this.props.location.query.keyword}/${this.props.location.query.location}`,{
      headers: {
        'Authorization':   window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const jobsData = response.data;
      console.log(jobsData);
      this.setState({
        jobs: jobsData
      });
    });
  }

  setFeaturedJob() {
    this.setState({
      featured: true
    });
  }

  // formatImageUrl(data) {
  //   return data.replace(/http/, "https");
  // }

  render() {
    return (
      <div className="main-wrapper">
        <LoggedInHeader2 />

        <div className="main-container">
        <h2>you searched for <span className="search-word">“{`${this.state.keyword}`}”</span> in <span className="search-word">“{`${this.state.location}`}”</span></h2>
          <div className="cards-container">
            { this.state.jobs.map((job, index) => {
              return (
                <JobCard2 key={index} job={job} />
              );
            }) }
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default SearchResults;
