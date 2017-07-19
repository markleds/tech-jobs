import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import Endpoint from "../constants/endpoint";

import 'react-datepicker/dist/react-datepicker.css';

import LoggedInHeader2 from './LoggedInHeader2';
import Interview2 from './Interview2';
import JournalJobComponent2 from './JournalJobComponent2';
import Footer2 from './Footer2';

class JournalEditInterview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interview: {
        Journal: {
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
        }
      },
      journal_id: 0,
      interview_date: "",
      interviewer_name: "",
      interviewer_position: "",
      interviewer_email: "",
      interviewer_phone: "",
      interview_notes: ""
    };
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    axios
    .get(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}/interviews/${this.props.params.id}`,{
      headers: {
        'Authorization':   window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const interviewData = response.data;
      this.setState({
        interview: interviewData,
        journal_id: interviewData.id,
        interview_date: Moment(interviewData.interview_date),
        interviewer_name: interviewData.interviewer_name,
        interviewer_position: interviewData.interviewer_position,
        interviewer_email: interviewData.interviewer_email,
        interviewer_phone: interviewData.interviewer_phone,
        interview_notes: interviewData.interview_notes
      });
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

  destroyInterview() {
    if (confirm('Are you certain you want to delete this?') === true) {
      axios
      .delete(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}/interviews/${this.props.params.id}`, {
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
    } else {
      browserHistory.push(`/journals/${this.props.params.journal_id}`);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .put(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}/interviews/${this.props.params.id}`, {
      interview: this.state
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
      interview_date: Moment(date)
    });
  }

  renderAppliedYN() {
    if (this.state.interview.Journal.applied === true){
      return "Yes";
    } else {
      return "No";
    }
  }

  render() {
    Moment.locale('en');
    const dateApplied = this.state.interview.Journal.date_applied;
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
                <h3>Application Contact <Link to={`/journals/${this.state.interview.Journal.id}/edit`}><button className="icon-button edit-button"/></Link></h3>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    name:
                  </div>
                  <div className="journal-entry-content">
                    {this.state.interview.Journal.contact_name}
                  </div>
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    email:
                  </div>
                  <div className="journal-entry-content">
                    {this.state.interview.Journal.contact_email}
                  </div>
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    phone:
                  </div>
                  {this.state.interview.Journal.contact_phone}
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    notes:
                  </div>
                  {this.state.interview.Journal.notes}
                </div>
                <div className="bottom-border-2"/>
                <div className="new-interview-form">
                <h3><button type="button" className="icon-button delete-button" onClick={this.destroyInterview.bind(this)} />Update Interview</h3>

                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="edit-label-2">
                    date {/*<input onBlur={this.handleChange} className="search-input journal-save-input-2 date-applied-input date-interviewed-input" name="interview_date" id="datepicker" value={Moment(dateApplied).format('MMMM d, YYYY')}/>*/}
                    <DatePicker selected={this.state.interview_date} onChange={this.handleDateChange} />
                  </div>
                  <div className="edit-label-2">
                    name <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_name" type="text" value={this.state.interviewer_name}/>
                  </div>
                  <div className="edit-label-2">
                    position <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_position" type="text" value={this.state.interviewer_position}/>
                  </div>
                  <div className="edit-label-2">
                    email <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_email" type="email" placeholder="@" value={this.state.interviewer_email}/>
                  </div>
                  <div className="edit-label-2">
                    phone <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_phone" type="text" placeholder="###-###-####" value={this.state.interviewer_phone}/>
                  </div>
                  <div className="notes-label-2">
                    notes
                  </div>
                  <div>
                   <textarea onChange={this.handleChange} name="interview_notes" type="text" placeholder="notes" value={this.state.interview_notes}/>
                  </div>
                  <div className="journal-save-2">
                    <button className="hvr-underline-from-center"><img src={require('../assets/img/save-icon-2.png')} height="13px"/> save</button>
                  </div>
                </form>
                </div>
                <div className="bottom-border-2"/>
                { this.state.interview.Journal.Interviews.map((interview, index) => {
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
              <JournalJobComponent2 job={this.state.interview.Journal.Job} />
            </div>
            <Footer2 />
        </div>
      </div>
    );
  }
}

export default JournalEditInterview;
