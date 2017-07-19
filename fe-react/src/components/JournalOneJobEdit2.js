import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import Endpoint from "../constants/endpoint";

import 'react-datepicker/dist/react-datepicker.css';

import LoggedInHeader2 from './LoggedInHeader2';
import Interview2 from './Interview2';
import JournalJobComponent2 from './JournalJobComponent2';
import Footer2 from './Footer2';

class JournalOneJobEdit2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journal: {
        Interviews: [],
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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAppliedChange = this.handleAppliedChange.bind(this);
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
        journal: journalData,
        api_id: journalData.api_id,
        api_job_id: journalData.api_job_id,
        contact_email: journalData.contact_email,
        contact_name: journalData.contact_name,
        contact_phone: journalData.contact_phone,
        applied: journalData.applied,
        date_applied: Moment(journalData.date_applied),
        id: journalData.id,
        job_id: journalData.job_id,
        notes: journalData.notes
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .put(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}`, {
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

  handleDateChange(date) {
    this.setState({
      date_applied: Moment(date)
    });
  }

  handleAppliedChange(event) {
    this.setState({
      [event.target.name]: JSON.parse(event.target.value)
    });
  }

  destroyJournal() {
    if (confirm('Are you certain you want to delete this?') === true) {
      axios
      .delete(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}`, {
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

  render() {
    Moment.locale('en');
    return (
      <div className="main-wrapper">
        <LoggedInHeader2 />
        <div className="main-container">
          <div className="journal-container">
            <div className="journal-entry-container-2 journal-entry-container-edit">
              <h2><button type="button" className="icon-button delete-button" onClick={this.destroyJournal.bind(this)} />Application Journal</h2>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="edit-label-2 applied-radio-buttons">
                  applied <input onChange={this.handleAppliedChange} className="journal-applied-input" name="applied" type="radio" value="true" checked={this.state.applied === true}/> <span className="white-text">Yes</span>
                  <input onChange={this.handleAppliedChange} className="journal-applied-input" name="applied" type="radio" value="false" checked={this.state.applied === false}/> <span className="white-text">No</span>
                </div>
                <div className="edit-label-2 date-input">
                  date <DatePicker selected={this.state.date_applied} onChange={this.handleDateChange} />
                  {/*<input onChange={this.handleChange} className="search-input journal-save-input-2 date-applied-input" name="date_applied" type="text" id="datepicker" value={this.state.date_applied}/>*/}
                </div>
                <h3>Application Contact</h3>
                <div className="edit-label-2">
                  name <input onChange={this.handleChange} className="search-input journal-save-input-2" name="contact_name" type="text" value={this.state.contact_name}/>
                </div>
                <div className="edit-label-2">
                  email <input onChange={this.handleChange} className="search-input journal-save-input-2" name="contact_email" type="email" placeholder="@" value={this.state.contact_email}/>
                </div>
                <div className="edit-label-2">
                  phone <input onChange={this.handleChange} className="search-input journal-save-input-2" name="contact_phone" type="text" placeholder="###-###-####" value={this.state.contact_phone}/>
                </div>
                <div className="notes-label-2">
                  notes
                </div>
                <div>
                 <textarea onChange={this.handleChange} name="notes" type="text" placeholder="notes" value={this.state.notes}/>
                </div>
                <div className="journal-save-2">
                  <button className="hvr-underline-from-center"><img src={require('../assets/img/save-icon-2.png')} height="13px"/> save</button>
                </div>
                <div className="bottom-border-2" />
              </form>
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

            </div>
            <JournalJobComponent2 job={this.state.journal.Job} />
          </div>
          <Footer2 />
        </div>
      </div>
    );
  }
}

export default JournalOneJobEdit2;
