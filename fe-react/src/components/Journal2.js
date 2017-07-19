import React, { Component } from 'react';
import axios from 'axios';

import Endpoint from "../constants/endpoint";

import LoggedInHeader2 from './LoggedInHeader2';
import JournalCard from './JournalCard';
import Footer2 from './Footer2';

class Journal2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journals: [{
        Job: {
          api_id: "",
          api_job_id: "",
          api_logo: "",
          apply_url: "",
          company_logo: "",
          company_name: "",
          company_url: "",
          date_created: "Fri Jun 30 19:25:00 UTC 2017",
          description: "",
          id: 0,
          job_type: "",
          location: "",
          title: ""
        },
        api_id: "",
        api_job_id: "",
        contact_email: "",
        contact_name: "",
        contact_phone: "",
        applied: false,
        date_applied: "",
        id: 0,
        job_id: 0,
        notes: ""
      }]
    };
  }

  componentDidMount() {
    axios
    .get(`${Endpoint.BASE_URL}/journals/`,{
      headers: {
        'Authorization':   window.localStorage.getItem('token'),
        'user_id': window.localStorage.user_id
      }
    })
    .then((response) => {
      const journalData = response.data;
      this.setState({
        journals: journalData
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <LoggedInHeader2 />
        <div className="main-container">
          <div className="dashboard-welcome">
            <h2>Welcome to <span className="logo-in-text">$ tech => jobs</span></h2>
            Begin your job search using the form above. Saved Job Journals will be listed below where you can keep track of the actions you've taken for the job application and who you have connected with.
          </div>
          <div className="cards-container">
            { this.state.journals.map((journal) => {
              return (
                <JournalCard key={journal.id} journal={journal} />
              );
            }) }
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default Journal2;
