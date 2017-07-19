import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import Moment from 'moment';

import Endpoint from "../constants/endpoint";

import LoggedInHeader2 from './LoggedInHeader2';
import Interview2 from './Interview2';
import JournalJobComponent2 from './JournalJobComponent2';
import Footer2 from './Footer2';

class JournalOneJob2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journal: {
        Interviews: [],
        Job: {
          api_id: "",
          api_num: 0,
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
    };
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    axios
    .get(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}`,{
      headers: {
        'Authorization':   window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const journalData = response.data;
      this.setState({
        journal: journalData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .put(`https://tech-jobs-api.herokuapp.com/journals/${this.props.params.journal_id}`, {
      journal: this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(() => {
      browserHistory.push(`/journals/${this.props.params.journal_id}`);
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

  destroyJournal() {
    if (confirm('Are you certain you want to delete this?') === true) {
      axios
      .delete(`https://tech-jobs-api.herokuapp.com/journals/${this.props.params.journal_id}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      })
      .then(() => {
        browserHistory.push('/journal');
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      browserHistory.push(`/journals/${this.props.params.journal_id}`);
    }
  }

  renderAppliedYN() {
    if (this.state.journal.applied === true){
      return "Yes";
    } else {
      return "No";
    }
  }

  render() {
    Moment.locale('en');
    const dateApplied = this.state.journal.date_applied;
    return (
      <div className="main-wrapper">
        <LoggedInHeader2 />
        <div className="main-container">
          <div className="journal-container">
            <div className="journal-entry-container-2">
              <h2><button type="button" className="icon-button delete-button" onClick={this.destroyJournal.bind(this)} />Application Journal</h2>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    applied:
                  </div> {this.renderAppliedYN()}
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    date:
                  </div> {Moment(dateApplied).format('dddd, MMMM Do, YYYY')}
                </div>
                <h3>Application Contact <Link to={`/journals/${this.state.journal.id}/edit`}><button className="icon-button edit-button"></button></Link></h3>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    name:
                  </div>
                  <div className="journal-entry-content">
                    {this.state.journal.contact_name}
                  </div>
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    email:
                  </div>
                  <div className="journal-entry-content">
                    {this.state.journal.contact_email}
                  </div>
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    phone:
                  </div>
                  {this.state.journal.contact_phone}
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    notes:
                  </div>
                  <div className="journal-notes">{this.state.journal.notes}</div>
                </div>
                <div className="bottom-border-2"/>
              { this.state.journal.Interviews.map((interview, index) => {
                if (!interview.visited) {
                  return (
                    <Interview2
                    key={index} index={index}
                    interview={interview} />
                  );
                } else {
                  return;
                }
              })}

              <div className="add-interview-2">
                <Link to={`/journals/${this.state.journal.id}/interviews/new`}><button className="hvr-underline-from-center"><img src={require('../assets/img/add-icon.png')} height="13px"/> add interview</button></Link>
              </div>

            </div>
            <JournalJobComponent2 job={this.state.journal.Job} />
          </div>
          <Footer2 />
        </div>
      </div>
    );
  }
}

export default JournalOneJob2;
